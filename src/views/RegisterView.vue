<template>
  <div class="contianer-fluid">
    <div class="container mt-5">
      <h2>Register User</h2>
      <div class="row">
        <div class="col-md-6 mt-4">
          <input type="text" class="form-control "  :class="{'is-invalid': error.first_name}" placeholder="First name" aria-label="First name" v-model="register.first_name">
          <div class="invalid-feedback" v-if="error.first_name">
            {{error.first_name[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <input type="text" class="form-control" :class="{'is-invalid': error.last_name}" placeholder="Last name" aria-label="Last name" v-model="register.last_name">
          <div class="invalid-feedback" v-if="error.last_name">
            {{error.last_name[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <input type="text" class="form-control" :class="{'is-invalid': error.email}" placeholder="Email Address" aria-label="Email Address" v-model="register.email">
          <div class="invalid-feedback" v-if="error.email">
            {{error.email[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <input type="text" class="form-control" :class="{'is-invalid': error.phone}" placeholder="Phone No." aria-label="Phone No." v-model="register.phone">
          <div class="invalid-feedback" v-if="error.phone">
            {{error.phone[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <select class="form-select" :class="{'is-invalid': error.section}" aria-label="Section" v-model="register.section">
            <option selected disabled value="">Section</option>
            <option value="1">Regional Director</option>
            <option value="2">Planning</option>
            <option value="3">ICTS</option>
            <option value="4">Legal</option>
            <option value="5">Registration</option>
            <option value="6">SES</option>
            <option value="7">ADMIN/HR</option>
            <option value="8">Finance</option>
            <option value="9">CRITS</option>
            <option value="10">CPDAS</option>
            <option value="11">CSF</option>
          </select>
          <div class="invalid-feedback" v-if="error.section">
            {{error.section[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <select class="form-select" :class="{'is-invalid': error.user_type}" aria-label="Section" v-model="register.user_type">
            <option selected disabled value="">User Type</option>
            <option value="3">Staff</option>
            <option value="2">Administrator</option>
            <option value="1">Super Administrator</option>
          </select>
          <div class="invalid-feedback" v-if="error.user_type">
            {{error.user_type[0]}}
          </div>
        </div>
        <div class="col-md-6 mt-4 ">
          <div class="input-group">
            <input :type="fieldType" class="form-control" :class="{'is-invalid': error.password}" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" v-model="register.password">
            <span class="input-group-text" id="basic-addon2"><font-awesome-icon :icon="eyecon" class="fa-1x" style="cursor:pointer" @click="showPassword"/></span>
            <div class="invalid-feedback" v-if="error.password">
              {{error.password[0]}}
            </div>
          </div>
          
        </div>
        <div class="col-md-6 mt-4">
          <div class="input-group">
            <input :type="cfieldType" class="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon2" v-model="register.password_confirmation">
            <span class="input-group-text" id="basic-addon2"><font-awesome-icon :icon="ceyecon" class="fa-1x" style="cursor:pointer" @click="cshowPassword"/></span>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <button class="btn btn-success" type="submit" @click="addNewUser">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fieldType: "password",
      eyecon: "eye-slash",
      passShow: false,
      cfieldType: "password",
      ceyecon: "eye-slash",
      cpassShow: false,
      register: {
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone': '',
        'section': '',
        'user_type': '',
        'status': '1',
        'password': '',
        'password_confirmation': '',
      },
      error: []
    };
  },
  methods: {
    showPassword(){
      if (!this.passShow) {
        this.eyecon = "eye";
        this.fieldType = "text";
        this.passShow = true;
      }else{ 
        this.eyecon = "eye-slash";
        this.fieldType = "password";
        this.passShow = false;
      }
    },
    cshowPassword(){
      if (!this.cpassShow) {
        this.ceyecon = "eye";
        this.cfieldType = "text";
        this.cpassShow = true;
      }else{ 
        this.ceyecon = "eye-slash";
        this.cfieldType = "password";
        this.cpassShow = false;
      }
    },
    async addNewUser(){
      
      await this.axios.post('register',this.register).then((response)=>{
        this.$toasted.success(response.data.message)
        this.register = {
          'first_name': '',
          'last_name': '',
          'email': '',
          'phone': '',
          'section': '',
          'user_type': '',
          'status': '1',
          'password': '',
          'password_confirmation': '',
        }
      }).catch(errors => {
          console.log(errors.response.data)
          this.error = errors.response.data.errors
          this.$toasted.error(errors.response.data.message)
      });
    }
  },
  watch: {
    // whenever question changes, this function will run
    register: {
      handler: function(){
          this.error = []
      },
      deep: true
    }
  },
}
</script>

<style scoped>

.contianer-fluid .container h2{
  font-weight: bolder;
  font-family: "Lucida Handwriting";
  margin-bottom: 20px;
  font-size: 2rem;
}

</style>
