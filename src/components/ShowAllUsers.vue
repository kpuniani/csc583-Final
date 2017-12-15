<template>
    <section class="bg-light">
        <div class="table-responsive">
            <table class="table myTable">
                <thead style="border-color:black">
                    <tr>
                        <th> User Name </th>
                        <th> Email </th>
                        <th> Phone </th>
                        <th> Company </th>
                        <th> IsOfficialVisit </th>
                        <th> IsEscortRequired </th>
                        <th> Escort Name </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
                        <td> {{ user.name }} </td>
                        <td> {{ user.email }} </td>
                        <td> {{ user.phone }} </td>
                        <td> {{ user.company }} </td>
                        <td> {{ user.officialVisit }} </td>
                        <td> {{ user.escortRequired }} </td>
                        <td> {{ user.escortName }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                users: [],
                toast: false,
                toastMessage : 'Loading Users...',
                btnDisabled : false
            }
        },
        created () {
            this.load()
        },
        methods: {
            load : function() {
                this.toast = true;
                this.btnDisabled = true;
                this.toastMessage = 'Loading Users...';


                this.$http.get('http://localhost:4000/users').then((response) => {
                    var users = response.data
                    for (var i=0; i < users.length;i++) {
                        this.users.push(users[i]);
                    }
                    setTimeout(() => {
                        this.toast = false;
                        this.btnDisabled = false;
                    }, 3000)
                }).catch((e) => {
                    this.toastMessage = "Fetching Users Failed";
                    setTimeout(() => {
                        this.toast = false;
                        this.btnDisabled = false;
                    }, 3000)

                });
            }
        }
    }
</script>


<style scoped>
    .myTable>thead>tr>td {
        border:1px solid black;
    }
    .myTable>thead>tr>th {
        border:1px solid black;
    }
    .myTable>tbody>tr>td {
        border:1px solid black;
    }
</style>
