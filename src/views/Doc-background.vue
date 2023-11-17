<template>
    <div class="doc-back">
        <div class="bg-cover">
        </div>
        <div class="bg-back"></div>
        <div class="bg-under">
            <svg xmlns="http://www.w3.org/2000/svg" width="100vw" viewBox="0 0 1609 246" fill="none">
                <path
                    d="M599.283 88.6802C303.883 59.0162 98.4667 148.564 0 167.34V246H1609V13.3535C1521.5 -19.7103 1277.14 16.581 1204.96 36.6848C877.569 127.877 732.225 108.345 599.283 88.6802Z"
                    fill="#068E55" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="100vw" viewBox="0 0 1609 370" fill="none">
                <path
                    d="M598.655 133.381C303.072 88.7641 97.5278 223.45 -1 251.69V370H1609V20.0846C1521.44 -29.6455 1276.93 24.939 1204.71 55.1763C877.114 192.335 731.68 162.958 598.655 133.381Z"
                    fill="#06C776" />
            </svg>
            <div class="bolang3and4">
                <svg xmlns="http://www.w3.org/2000/svg" width="100vm" viewBox="0 0 1609 412" fill="none">
                    <path
                        d="M1009.72 148.521C1305.12 98.8401 1510.53 248.814 1609 280.261V412H0V22.3645C87.5038 -33.0107 331.86 27.7699 404.036 61.4395C731.431 214.168 876.775 181.456 1009.72 148.521Z"
                        fill="#3BF5A7" />
                </svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100vm" viewBox="0 0 1473 260" fill="none">
                    <path
                        d="M548.629 93.7271C278.197 62.3748 90.1438 157.019 0 176.864V260H1473V14.1135C1392.89 -20.832 1169.19 17.5247 1103.12 38.7725C803.393 135.154 670.334 114.511 548.629 93.7271Z"
                        fill="#66DFAC" />
                </svg> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bg-under {
    width: 100vw;
    height: 30vh;
    position: absolute;
    left: 0;
    top: 70vh;
    z-index: 20;

    // overflow: hidden;
    svg:nth-child(1) {
        position: absolute;
        z-index: 40;
        bottom: 0;
    }

    svg:nth-child(2) {
        position: absolute;
        z-index: 30;
        bottom: 0;

    }

    >.bolang3and4 {
        position: relative;
        z-index:20;
        width:100vw;
        height: 100vh;
        // border: 1px solid red;
        top:-70vh;

        svg:nth-child(1) {
            position: absolute;
            z-index: 20;
            bottom: 0;
        }

        // svg:nth-child(2) {
        //     position: absolute;
        //     z-index: 10;
        //     bottom: 0;
        // }

    }

}

.doc-back {
    position: relative;
}

.bg-cover {
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    z-index: 30;
    left: 0;
    top: 0;
}

.bg-back {
    width: 100vw;
    height: 100vh;
    background: #B2FADC;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
}</style>