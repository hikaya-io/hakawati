<template>
    <el-form ref="form" model="form" label-width="120px">
        <el-row :gutter="20">
        <el-col class="grid-content" :span="12">
        <el-form-item label="First name">
            <el-input v-model="form.firstName"></el-input>
         </el-form-item>
        </el-col>
        <el-col class="grid-content":span="12">
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
        <el-form-item label="Activity time">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type"></el-checkbox>
            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
            <el-checkbox label="Offline activities" name="type"></el-checkbox>
            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor"></el-radio>
            <el-radio label="Venue"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button size="medium" type="primary" @click="onSubmit">Create</el-button>
            <el-button size="medium">Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
        return {
            form: {
            firstName: '',
            lastName: '',
            sex: '',
            dateOfBirth: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            }
        }
        },
        methods: {
        onSubmit() {
            console.log('submit!');
        }
        }
    }
</script>

<style>
    .el-form {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

</style>
