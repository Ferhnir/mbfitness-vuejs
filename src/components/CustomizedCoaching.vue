<template>
    <v-content id="CustomizedCoaching">
        <v-layout>
            <v-flex>
                <div style="height: 350px;">
                    <v-layout align-end justify-end column fill-height>
                        <div class="boxm">
                            <span class="display-1 font-weight-bold">
                                CUSTOMIZED COACHING TO
                            </span>
                            <h2 class="display-3 font-weight-bold py-5">ACHIEVE YOUR GOALS</h2>
                        </div>
                    </v-layout>
                </div>        
            </v-flex>
        </v-layout>
        <v-layout py-5>
            <v-flex>
                <v-layout column align-center>
                    <v-btn large dark color="pink" @click="setContactDialogState(true)">
                        Get your qutoe today!
                    </v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-content>
</template>
<script>

export default {
    name: "CustomizedCoaching"
}
</script>
<style scoped>


    .boxm {
        display: block;
    }

    @media (max-width: 600px) {
        #CustomizedCoaching {
            height: 70vh;
        }

        .boxm {
            text-align: center
        }

        .boxm .display-1 {
            font-size: 28px;
        }
    }

    @media (min-width: 601px) {
        #CustomizedCoaching {
            height: 65vh;
        }

        .boxm {        
            width:50%;
            text-align: right;
            margin-right: 100px;
        }
    }   

</style>