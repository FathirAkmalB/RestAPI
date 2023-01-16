<template>
    <table border="1" cellpadding="10" cellspacing="0" class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">Nama</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">No Rumah</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(warga, index) in dataWarga" :key="index">
                <td scope="row">{{ warga.nama }}</td>
                <td>{{ warga.jenis_kelamin }}</td>
                <td>{{ warga.no_rumah }}</td>
                <td>
                    <a href="">Edit</a>
                    <a href="">Hapus</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { onMounted,ref } from 'vue';
import axios from 'axios';

    export default{
        setup(){
            let dataWarga = ref([])
            onMounted(() => {
                axios.get(`http://127.0.0.1:8000/api/warga`).then(response =>{
                    dataWarga.value = response.data.data
                }).catch(err => {
                    console.log(err.response.data)
                })
            })
            return {
                dataWarga
            }
        }
    }
</script>

