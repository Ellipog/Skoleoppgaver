<script>
    let lengde = 100
    let bredde = 80
    $: areal = lengde*bredde/1000
</script>

<div class="box">
    <label>Lende: <input type="range" bind:value={lengde}> cm</label>
    <label>Bredde: <input type="range" bind:value={bredde}> cm</label>
    <div class="answer" style="width: {lengde}px; height: {bredde}px;">
        Gulvarealet er {areal} m<sup>2</sup>
    </div>
</div>

<style>
    .answer {
        background-color: brown;
        color: white;
        text-align: center;
    }

    .box {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>