<script>
    import Splash from './splash.svelte';

    let boom = '../../vine-boom.mp3';
    let mPos = { x: 0, y: 0 };

    $: render = false;
    async function logoSlam() {
        render = true;
        await new Promise(r => setTimeout(r, 500));
        render = false;
    }

</script>

<div on:pointermove={(e) => {mPos = {x: e.clientX, y: e.clientY}}}>
    <h2>The mouse pointer is hovering over this footer at {mPos.x}, {mPos.y}</h2>
    <p>
        This website is written in <button on:click={logoSlam}>Svelte</button> and uses basically every trick and technique I could think of.
        I left off on Slot Props.
    </p>
    {#if render}
        <Splash/>
    {/if}
    <img src={'/monkey.gif'} alt="Everett mall experience"/>
</div>

<style>
    h2 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 25px;
    }

    img {
        width: 20%;
    }
</style>