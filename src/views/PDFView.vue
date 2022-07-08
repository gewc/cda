<template>
  <div class="contianer-fluid">
    <div class="waitingContainer" v-if="showLoader"> 
        <img src="@/assets/cdalogo.png" alt="" class="waitingLogo" >
    </div>
    <div class="container mt-5">
      <h2>PDF Application</h2>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Merge</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Split</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <!-- MERGE PDF -->
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="row justify-content-center">
            <div class="col-md-6 mt-5">
              <div class="input-group">
                <input type="file" class="form-control" ref="inputMergeFile" @change="onChangeFileMerge" accept=".pdf" id="inputPdfMerge" aria-describedby="inputGroupFileAddon03" aria-label="Upload" multiple>
              </div>

              <button type="button" class="btn btn-success mt-2" @click="pdfMerge">Merge</button>

            </div>
          </div>
        </div>
        <!-- // MERGE PDF -->
        <!-- SPLIT PDF -->
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="row justify-content-center">
            <div class="col-md-6 mt-5">
              <div class="input-group">
                <input type="file" class="form-control" ref="inputSplitFile" @change="onChangeFileSplit" accept=".pdf" id="inputPdfSplit" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
              </div>

              <div class="form-check form-switch mt-2">
                <input class="form-check-input" type="checkbox" @change="onChangeSwitch" v-model="splitType" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">{{splitTypeText}}</label>
              </div>

              <label class="form-label mt-2" v-if="splitType">Split Range</label>
              <div class="input-group mb-3" v-if="splitType">
                <input type="text" class="form-control" v-model="range.from" placeholder="From" aria-label="From">
                <span class="input-group-text">-</span>
                <input type="text" class="form-control" v-model="range.to" placeholder="To" aria-label="To">
              </div>

              <button type="button" class="btn btn-primary mt-2" @click="pdfSplit">Split</button>
            </div>
          </div>
          
        </div>
        <!-- // SPLIT PDF -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      error: [],
      pdf: null,
      attachments:[],
      range: {
        'from': 1,
        'to' : null
      },
      filename: '',
      splitTypeText: 'Combine Selected Range',
      splitType: true,
      showLoader: false,
    };
  },
  methods: {
    onChangeSwitch(){
      if(this.splitType){
        this.splitTypeText = "Combine Selected Range";
      }else{
        this.splitTypeText = "Split All Page";
      }
    },
    onChangeFileSplit(e){
      this.pdf = e.target.files[0];
    },
    onChangeFileMerge(e){
      this.attachments = [];
      let selectedFiles = e.target.files;

      if(!selectedFiles.length){
        return false;
      }

      for(let i=0; i<selectedFiles.length; i++){
        this.attachments.push(selectedFiles[i]);
      }

    },
    async pdfSplit(){
      if(this.splitType == true && (this.range.from == 0 || this.range.to == null)){
        this.$toasted.error('Range FROM must be more than ZERO!')
      }else{
        let fd = new FormData();
        fd.append('pdf', this.pdf);
        fd.append('from', this.range.from);
        fd.append('to', this.range.to);
        fd.append('type', this.splitType);

        this.showLoader = true;

        await this.axios.post('pdfsplit', fd).then((response)=>{
          this.$toasted.success(response.data.message)
          this.filename = response.data.filename
          this.pdf = null;
          this.$refs.inputSplitFile.value = null;
          this.showLoader = false;
          this.downloadFile('split')

        }).catch(errors => {
            console.log(errors.response.data)
            this.error = errors.response.data.errors
            this.$toasted.error(errors.response.data.message)
            this.showLoader = false;
        });
      }
    },
    async downloadFile(funcType = 'merge') {
      let type = 'pdf';
      if(this.splitType == true && funcType == 'split'){
        type = 'pdf';
      }else if(this.splitType == false && funcType == 'split'){
        type = 'zip';
      }else{
        type = 'merge';
      }

      await this.axios.get('dlpdf/'+ this.filename +'/'+ type, {responseType: 'arraybuffer'})
        .then(response => {
          let blob = new Blob([response.data], { type: 'application/pdf' })
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = this.filename
          link.click()
        })
    },
    async pdfMerge(){

      if(this.attachments.length < 2){
        this.$toasted.error('Please upload 2 or more PDF files.')
        return false;
      }

      //console.log(this.pdf);
      let fd = new FormData();

      for(let i=0; i<this.attachments.length; i++){
        fd.append('pdfs[]', this.attachments[i]);
      }
      
      this.showLoader = true;

      await this.axios.post('pdfmerge', fd).then((response)=>{
        this.$toasted.success(response.data.message)
        this.filename = response.data.filename
        this.attachments = [];
        this.$refs.inputMergeFile.value = null;
        this.showLoader = false;
        this.downloadFile()


      }).catch(errors => {
          console.log(errors.response.data)
          this.error = errors.response.data.errors
          this.$toasted.error(errors.response.data.message)
          this.showLoader = false;
      });
    }
  },
}
</script>

<style scoped>

.contianer-fluid .container h2{
  font-weight: bolder;
  font-family: "Lucida Handwriting";
  margin-bottom: 20px;
}

.container .row .col-md-4, .contianer-fluid .container h2 {
  animation-name: scalingTitle;
  animation-duration: 2s;
}

.container .row .col-md-4, .contianer-fluid .container #myTab {
  animation-name: scaling;
  animation-duration: 3s;
}

.container .row .col-md-4, .contianer-fluid .container #myTabContent {
  animation-name: scaling;
  animation-duration: 3s;
}

@keyframes scalingTitle {
  from {transform: scale(0.3);}
  to {transform: scale(1);}
}

@keyframes scaling {
  from {transform: scale(0.5);}
  to {transform: scale(1);}
}

@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

.waitingContainer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #00000061;
    z-index: 999999;
    display: flex;
    justify-content: center;
    top: 0px;
}

.waitingLogo {
    display: block;
    margin: auto;
    width: 100px;
    animation-name: blinker;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(-5, 1, 1, 1);
    animation-duration: .88s;
}


</style>
