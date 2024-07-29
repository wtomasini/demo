<script>
    let name = 'will';
    let cat1 = '/src/sillyCat.gif';
    import Sellout from "\$lib/sellout.svelte";
    import Counter from "\$lib/counter.svelte";
</script>

<h1>You found {name}'s website</h1>

<Sellout/>

<Counter/>

<img src={cat1} alt="A cat"/>

<style>
    h1 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>