<template>
    <footer class="py-5 bg-secondary">
        <div class="container">
            <hr class="text-light">
            <div class="footer-head">
                <div class="container d-flex justify-content-between">
                    <div class="img-container invert">
                        <img src="../assets/img/valve-logo.png" alt="valve-logo">
                    </div>
                    <div class="img-container">
                        <img src="../assets/img/steam-logo.png" alt="steam-logo">
                    </div>
                </div>
                <div class="head-content text-center">
                    <small class="copyright">@ 2023 Valve Corporation. Tutti i diritti riservati. Tutti i marchi appartengono ai rispettivi
                        propietari negli Stati Uniti e negli altri paesi. IVA inclusa nel prezzo(Ove Applicabile).
                    </small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Informativa sulla Privacy</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Informazioni Legali</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Contratto di sottoscrizione a Steam</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Rimborsi</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Cookie</a></small>
                </div>
            </div>
            <hr class="text-light">
            <div class="footer-foot">
                <div class="container text-center">
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Informativa su Valve</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Impieghi</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Steamworks</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Distribuzioni su steam</a>|</small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Assistenza</a></small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#">Buoni Regalo</a></small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#"><font-awesome-icon icon="fa-brands fa-facebook" /> Steam</a></small>
                    <small class="text-light mx-1"><a class="text-decoration-none text-light mx-1" href="#"></a><font-awesome-icon icon="fa-brands fa-twitter" />@steam</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;


.invert {
    filter: invert(1);
}
i{
    color: white;
}

.img-container {
    width: 100px;

    img {
        width: 100%;
        height: fit-content;
        display: block;
    }
}

.head-content {
    .copyright{
        color: $quternary;

    }
    small {
        word-spacing: -1px;
    }

}
</style>