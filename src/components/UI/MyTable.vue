<template>

<!--    <button @click="editTable">Edit</button>-->
    <div class="form-check form-switch" >
        <form>
            <label class="form-check-label" ><input class="form-check-input" type="checkbox" v-model="checked">Режим редактирования</label>
        </form>
        <form>
            <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="checked2">Курсовой проект</label>
        </form>
    </div>

    <div class="table-responsive" style="width: 95%; margin-left: 2%;">
        <table class="table table-hover table-bordered border-primary">
        <thead style="font-size: 10px; height: auto">
            <tr>
<!--                <td></td>-->
                <th style="border-top:2px solid #0d6efd; border-left:2px solid #0d6efd; border-right:2px solid #0d6efd; border-bottom:2px solid #0d6efd" :colspan="cols" scope="col">{{ Object.values(this.arrayHeaders[0]).toString() }}</th>
            </tr>
            <tr>
<!--                <td></td>-->
                <th style="border-left:2px solid #0d6efd; border-right:2px solid #0d6efd; border-bottom:2px solid #0d6efd" :colspan="cols" scope="col">{{Object.values(this.arrayHeaders[1]).toString()}}</th>
            </tr>
            <tr>
                <td style="border-left:2px solid #0d6efd; " ></td>
                <th style="text-align:left; " >Дата: </th>
                <th :colspan="cols - 1" style="text-align:left; border-right:2px solid #0d6efd" scope="col">{{Object.values(this.arrayHeaders[2]).toString()}}</th>
            </tr>
            <tr>
                <td style="border-left:2px solid #0d6efd"> </td>
                <th style="text-align:left" >Дисциплина: </th>
                <th :colspan="cols - 1" style="text-align:left; border-right:2px solid #0d6efd" scope="col">{{Object.values(this.arrayHeaders[3]).toString()}}</th>
            </tr>
            <tr>
                <td style="border-left:2px solid #0d6efd; border-left:2px solid #0d6efd"></td>
                <th style="text-align:left">Группа: </th>
                <th :colspan="cols - 1" style="text-align:left; border-right:2px solid #0d6efd" scope="col">{{Object.values(this.arrayHeaders[4]).toString()}}</th>
            </tr>
            <tr>
                <td style="border-left:2px solid #0d6efd"></td>
                <th style="text-align:left">Кафедра: </th>
                <th :colspan="cols - 1" style="text-align:left; border-right:2px solid #0d6efd" scope="col">{{Object.values(this.arrayHeaders[5]).toString()}}</th>
            </tr>
            <tr>
                <td style="border-bottom: 2px solid black; border-left:2px solid #0d6efd"></td>
                <th style="border-bottom: 2px solid black; text-align:left">Преподаватель: </th>
                <th style="border-bottom: 2px solid black; text-align:left; border-right:2px solid #0d6efd" :colspan="cols - 1" scope="col">{{Object.values(this.arrayHeaders[6]).toString()}}</th>
            </tr>
            <tr>
                <th  rowspan="2" style="border-right: 2px solid black; border-left: 2px solid black" width="40px">№ п/п</th>
                <th  rowspan="2" >Фамилия Имя Отчество</th>
<!--                <th  rowspan="2">Имя</th>-->
<!--                <th  rowspan="2">Отчество</th>-->
                <th  rowspan="2" style="border-left: 2px solid black;" class="M1M2">М1</th>
                <th  rowspan="2" style="border-right: 2px solid black" class="M1M2">М2</th>
                <th v-if="checked2" colspan="4" style="border-right: 2px solid black">Курсовой проект</th>
                <th colspan="4" style="border-right: 2px solid black">Экзамен/Зачет</th>
                <th colspan="4" style="border-right: 2px solid black">Повторный экзамен/зачет (1) </th>
                <th colspan="4" style="border-right: 2px solid black">Повторный экзамен/зачет (2) </th>
            </tr>
            <tr>
                <th v-if="checked2">Балл</th>
                <th v-if="checked2">Оценка</th>
                <th v-if="checked2">Дата</th>
                <th v-if="checked2">Преподаватель</th>
                <th style="border-left: 2px solid black">Балл</th>
                <th>Оценка</th>
                <th>Дата</th>
                <th style="border-right: 2px solid black">Преподаватель</th>
                <th>Балл</th>
                <th>Оценка</th>
                <th>Дата</th>
                <th style="border-right: 2px solid black">Преподаватель</th>
                <th>Балл</th>
                <th>Оценка</th>
                <th>Дата</th>
                <th style="border-right: 2px solid black">Преподаватель</th>
            </tr>
        </thead>
        <tbody class="table-striped table-group-divider table-striped" ref="body">
                <tr v-if="checked" v-for="student in listOfStudent" :key="student.id" @click="remove(student.id)">
                    <th style="border-right: 2px solid black; border-left: 2px solid black"> {{student.id}} </th>
                    <th style="border-right: 2px solid black"> {{student.FIO}} </th>
                    <th class="M1M2"><input type="number" v-model="student.m1" ></th>
                    <th style="border-right: 2px solid black" class="M1M2"><input type="number" v-model="student.m2"></th>
                    <th><input type="number" v-model="student.scope1"></th>
                    <th><input type="text" v-model="student.scopeText1"></th>
                    <th><input type="text" v-model="student.date1"></th>
                    <th style="border-right: 2px solid black"><input type="text" v-model="student.teacher1"></th>
                    <th><input type="number" v-model="student.scope2"></th>
                    <th><input type="text" v-model="student.scopeText2"></th>
                    <th><input type="text" v-model="student.date2"></th>
                    <th style="border-right: 2px solid black"><input type="text" v-model="student.teacher2"></th>
                    <th><input type="number" v-model="student.scope3"></th>
                    <th><input type="text" v-model="student.scopeText3"></th>
                    <th><input type="text" v-model="student.date3"></th>
                    <th style="border-right: 2px solid black"><input type="text" v-model="student.teacher3"></th>
                    <th v-if="checked2"><input type="number" v-model="student.scope4"></th>
                    <th v-if="checked2"><input type="text" v-model="student.scopeText4"></th>
                    <th v-if="checked2"><input type="text" v-model="student.date4"></th>
                    <th v-if="checked2" style="border-right: 2px solid black"><input type="text" v-model="student.teacher4"></th>
                </tr>
                <tr v-else :key="student.id" v-for="(student, index) in listOfStudent">
                    <th v-if="checked2" v-for="key in gridColumnsKurs" :class="[{borderSt: key.includes('id') || key.includes('FIO') || key.includes('m2')
                    || key.includes('teacher1') || key.includes('teacher2') || key.includes('teacher3') || key.includes('teacher4'), M1M2 : key.includes('m1') || key.includes('m2'), borderLeftID : key.includes('id')}]"
                    >
                        {{student[key]}}
                    </th>
                    <th v-else v-for="key in gridColumns" :class="{borderSt: key.includes('id') || key.includes('FIO') || key.includes('m2')
                    || key.includes('teacher1') || key.includes('teacher2') || key.includes('teacher3') || key.includes('teacher4'), M1M2 : key.includes('m1') || key.includes('m2'), borderLeftID : key.includes('id')}"
                    >
                        {{student[key]}}
                    </th>
                </tr>

        </tbody>
            <tfoot>
                <button style="margin-top: 10px;" type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
                <div ref="modalAdd" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Добавить студента</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="text" placeholder="Введите имя студента: " v-model="newStudent">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="addStudent" data-bs-dismiss="modal">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tfoot>
    </table>

    </div>

</template>

<script>
    export default {
        name: 'my-table',
        data() {
            return {
                arrayHeaders: [
                    {semester: 'Весенний семестр 2022/2023 учебного года'},
                    {fieldsOfStudy: '09.03.03 «Прикладная информатика»'},
                    {date: '26.02.2023 21:57:41'},
                    {discipline: 'Вычислительные системы, сети и телекоммуникации'},
                    {group: 'ИДБ-22-10'},
                    {department: 'УИТС'},
                    {teachers: 'Ибатулин М.Ю.'}
                ],
                gridColumns: ['id', 'FIO', 'm1', 'm2', 'scope1', 'scopeText1', 'date1', 'teacher1',
                'scope2', 'scopeText2', 'date2', 'teacher2', 'scope3', 'scopeText3', 'date3', 'teacher3'
                ],
                gridColumnsKurs: [
                    'id', 'FIO', 'm1', 'm2', 'scope1', 'scopeText1', 'date1', 'teacher1',
                    'scope2', 'scopeText2', 'date2', 'teacher2', 'scope3', 'scopeText3', 'date3', 'teacher3',
                    'scope4', 'scopeText4', 'date4', 'teacher4'
                ],
                newStudent: '',
                listOfStudent: [],
                rows: 20,
                cols: 25,
                checked: false,
                checked2: false,
                NameStudent: ['Иванов Иван Иваныч', 'Петров Петр Петрович', 'Сидоров Сидр Сидорович', 'Иванов1 Иван1 Иваныч', 'Петров2 Петр2 Петрович', 'Сидоров2 Сидр2 Сидорович',
                    'Иванов2 Иван2 Иваныч', 'Петров3 Петр Петрович',
                        'Сидоров3 Сидр Сидорович', 'Иванов5 Иван Иваныч', 'Петров4 Петр Петрович', 'Сидоров7 Сидр Сидорович',],
            }
        },
        mounted() {
            this.generateID(this.NameStudent);
            this.listOfStudent.forEach(el => console.log(el.id));
        },
        watch: {

        },
        methods: {
            generateID(list) {
                let counter = 1;
                list.forEach(el => {
                    this.listOfStudent.push({id: counter, FIO : el, m1: '', m2: '', scope1: '', scopeText1: '',
                        date1: '', teacher1 :'', scope2: '', scopeText2 :'', date2 :'', teacher2 :'',
                        scope3 : '', scopeText3 : '', date3 :'', teacher3 :'',
                        scope4 :'', scopeText4 :'', date4 :'', teacher4 :'' });
                    counter++;
                })
            },
            editTable() {
                //console.log(this.$refs.body)
                for(let i = 0; i < this.$refs.body; i++) {
                    console.log(this.$refs.body.rows[i]);
                }
            },
            addStudent() {
                let counter = this.listOfStudent.length + 1;
                this.listOfStudent.push({id: counter, FIO : this.newStudent, m1: '', m2: '', scope1: '', scopeText1: '',
                    date1: '', teacher1 :'', scope2: '', scopeText2 :'', date2 :'', teacher2 :'',
                    scope3 : '', scopeText3 : '', date3 :'', teacher3 :'',
                    scope4 :'', scopeText4 :'', date4 :'', teacher4 :'' })
                this.newStudent = ''
            }
        }
    }
</script>

<style scoped>
 th input {
    width: 100%;
}
    th {
        font-size: 12px;
    }
    .FIO {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        text-align: center;
        font-size: 12px;
        color: black;
    }
    .M1M2 {
        background-color: rgba(127, 215, 251, 0.4);
    }
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
    .borderSt {
        border: 1px solid #0d6efd;
        border-right: 2px solid black;
    }
    .borderLeftID {
        border-left: 2px solid black
    }
    grayCol {
        background: gray;
    }


</style>