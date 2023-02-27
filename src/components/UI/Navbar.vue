<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light" style="background-color: #6495ED">
        <div class="container-fluid">
            <a class="navbar-brand" @click="this.$router.push('/')"><img :src="logo" alt="" width="55" height="35" class="d-inline-block align-text-top"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <a class="nav-link"
                           aria-current="page"
                           :class="{active: this.$route.path === '/calendar'}"
                           @click="this.$router.push('/calendar')"
                           >Календарь</a>
                    </li>
                    <li class="nav-item">
                        <a
                                class="nav-link"
                                aria-current="page"
                                :class="{active: this.$route.path === '/modals'}"
                                @click="this.$router.push('/modals')">Модульные журналы</a>
                    </li>
<!--                    <li class="nav-item dropdown">-->
<!--                        <a :class="{active: this.$route.path === '/modals'}" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="this.$router.push('/modals')">-->
<!--                            Модульные журналы-->
<!--                        </a>-->
<!--                        <ul class="dropdown-menu">-->
<!--                            <li><a class="dropdown-item" href="#">Группа 1</a></li>-->
<!--                            <li><a class="dropdown-item" href="#">Группа 2</a></li>-->
<!--                            <li><hr class="dropdown-divider"></li>-->
<!--                            <li><a class="dropdown-item" href="#">Доп раздел</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li class="nav-item">-->
<!--                        <a class="nav-link disabled">Disabled</a>-->
<!--                    </li>-->
                </ul>
                <button type="button" class="float-right btn btn-primary">Войти</button>
<!--                <form class="d-flex" role="search">-->
<!--                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--                    <button class="btn btn-outline-success" type="submit">Search</button>-->
<!--                </form>-->
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                logo: 'https://psv4.userapi.com/c240331/u178121633/docs/d40/cf9b9e1b9bfb/UITS.png?extra=KTrHKHNBV3ONr_' +
                    'xCVhEnsDIxbMH0TYURvQeNuo0FlfFsrGXKUKOqLqqOpwCjm4pgh0ZDEMDDD9bsj9gXK9fWGsoJ0ARlsbdcbiRGc9RJIG4xQvYgmtcc' +
                    'Jo9WBeM6MH8DU0vM5KxSfWobN-cT4i2bg6lrJXt7',
            }
        },
        methods: {
            active() {

            }
        }
    }
</script>

<style scoped>

</style>