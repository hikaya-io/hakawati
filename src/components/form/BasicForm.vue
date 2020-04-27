<template>
    <el-form ref="form" model="form" label-width="120px">
        <el-row :gutter="20">
        <el-col class="grid-content" :span="12">
        <el-form-item label="First name">
            <el-input v-model="form.firstName"></el-input>
         </el-form-item>
        </el-col>
        <el-col class="grid-content" :span="12">
        <el-form-item label="Last name">
            <el-input v-model="form.lastName"></el-input>
        </el-form-item>
        </el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col class="grid-content" :span="12">
        <el-form-item label="Sex">
            <el-select v-model="form.sex" placeholder="please select your sex">
            <el-option label="Male" value="male"></el-option>
            <el-option label="Female" value="female"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col class="grid-content" :span="12">
        <el-form-item label="Date of birth">
            <el-date-picker type="date" v-model="form.dateOfBirth"></el-date-picker>
        </el-form-item>
        </el-col>
        </el-row>
        <el-form-item label="Eligible">
            <el-switch v-model="form.eligible"></el-switch>
        </el-form-item>
        <el-form-item label="Services">
            <el-checkbox-group v-model="form.services">
            <el-checkbox label="Construction" name="type"></el-checkbox>
            <el-checkbox label="Distribution" name="type"></el-checkbox>
            <el-checkbox label="Event" name="type"></el-checkbox>
            <el-checkbox label="Training" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Implementer">
            <el-radio-group v-model="form.implementer">
            <el-radio label="Consortium"></el-radio>
            <el-radio label="Partner"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Notes">
            <el-input type="textarea" v-model="form.notes"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button size="medium" type="primary" @click="onSubmit">Create</el-button>
            <el-button size="medium">Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        sex: '',
        dateOfBirth: '',
        eligible: false,
        services: [],
        implementer: '',
        notes: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
    .el-form {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    .el-select-dropdown__item {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    .el-date-picker {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
</style>
