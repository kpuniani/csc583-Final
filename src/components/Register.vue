<template>
    <section class="bg-light">
    <h1> Welcome to Visitor App!</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
        <button @click="dispModal" style="width:auto;">Sign Up</button>
        <div id="id01" class="modal" v-bind:style="{display:this.dispModalFlag}">

        <div class="container">

         <form class="form col-lg-12" style="background-color:white" @submit="onSubmit">
                 <label class="col-lg-3">Name : </label>
                 <input class="col-lg-8" required name="name" v-model='user.name' placeholder="Name" type="text" autocomplete="off">

                 <label class="col-lg-3">Email : </label>
                 <input class="col-lg-8" required name="email" v-model="user.email" placeholder="E-mail" type="email" autocomplete="off">

                 <label class="col-lg-3">Phone : </label>
                 <input class="col-lg-8" required name="phone" v-model='user.phone' placeholder="Phone" type="phone" pattern="^[1-9][0-9]{9}" title="enter valid 10 digit phone number" autocomplete="off">

                 <label class="col-lg-3">Company : </label>
                 <input class="col-lg-8" required name="company" v-model="user.company" placeholder="Company" type="text" autocomplete="off">
             <br/>
             <br/>
             <span>
                 <input type="checkbox" id="officialVisit" v-model="user.officialVisit" style="width:2%">
                 <label for="officialVisit"> Official Visit </label>
             </span>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span>
                 <input type="checkbox" id="escortRequired" v-model="user.escortRequired"  style="width:2%">
                 <label for="escortRequired"> Escort Required </label>
             </span>

             <div v-if="user.escortRequired">
                 <label class="col-lg-3">Name: </label>
                 <input class="col-lg-8" v-bind:required='user.escortRequired' name="escortName" v-model="user.escortName" placeholder="Escort Name" type="text" autocomplete="off">
             </div>
             <br />
             <span>
                <button id="signupbtn" :disabled="btnDisabled" class="col-lg-5 button btn">Join US</button>
                <button type="cancelbtn" @click="hideModal" class="cancelbtn">Cancel</button>
             </span>
         </form>
        </div>
        <br/>
        <br/>
        <div>
            <input type="checkbox" v-model="isAdmin" style="width:2%">
            <label> Click to list all Admin Privileges</label>
        </div>
        <div v-if="isAdmin">
            <p><b><a href="/showUsers" target="_blank"><u>Show All Registered Users </u></a> </b></p>
        </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    officialVisit : false,
                    escortRequired : false,
                    escortName : ''
                },
                toast: false,
                toastMessage : 'Registering...',
                btnDisabled : false,
                isAdmin : false,
                dispModalFlag:"none"
            }
        },
        methods: {
            dispModal : function(event) {
                this.dispModalFlag = "block";
            },
            hideModal : function(event) {
                this.dispModalFlag = "none";
            },
            clearForm : function() {
                for (let field in this.user) {
                    this.user[field] = ''
                }
            },
            onSubmit : function(evt) {
                evt.preventDefault();
                this.toast = true;
                this.btnDisabled = true;
                this.toastMessage = 'Registering User...';

                var form = new FormData();
                for (var field in this.user) {
                    form.set(field, this.user[field]);
                }

                var config = {
                    headers : {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : 'http://localhost:3000'
                    }
                }

                this.$http.post('http://localhost:4000/user', this.user, config).then((response) => {
                    this.toastMessage = "Success";
                    alert(this.toastMessage);

                    this.toast = false;
                    this.clearForm();
                    this.btnDisabled = false;

                }).catch((e) => {
                    this.toastMessage = "Failed";
                    alert(this.toastMessage);
                    this.toast = false;
                    this.btnDisabled = false;


                });
            }
        }
    }
</script>


<style scoped>


    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }


    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Extra styles for the cancel button */
    .cancelbtn {
        padding: 14px 20px;
        background-color: #f44336;
    }

    /* Float cancel and signup buttons and add an equal width */
    .cancelbtn,.signupbtn {
        float: left;
        width: 50%;
    }

    /* Add padding to container elements */
    .container {
        padding: 16px;
    }

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button (x) */
    .close {
        position: absolute;
        right: 35px;
        top: 15px;
        color: #000;
        font-size: 40px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: red;
        cursor: pointer;
    }

    /* Clear floats */
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    /* Change styles for cancel button and signup button on extra small screens */
    @media screen and (max-width: 300px) {
        .cancelbtn, .signupbtn {
            width: 100%;
        }
    }

</style>
