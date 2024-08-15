<script>
    let cat1 = '/src/sillyCat.gif';
    let mPos = { x: 0, y: 0 };
</script>

<div on:pointermove={(e) => {mPos = {x: e.clientX, y: e.clientY}}}>
    <h2>The mouse pointer is hovering over this footer at {mPos.x}, {mPos.y}</h2>
    <p>
        This website is written with the SvelteKit framework and uses basically every trick and technique I could think of.
        I am seeking a graphic designer, don't worry.
    </p>
    <img src={cat1} alt="Suspicious cat"/>
</div>

<style>
    h2 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 25px;
    }
</style>