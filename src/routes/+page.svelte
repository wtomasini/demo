<script>
    import Sellout from "$lib/sellout.svelte";
    import Counter from "$lib/counter.svelte";
    import InputDemo from "$lib/inputDemo.svelte";
    import CheckEmail from "$lib/checkEmail.svelte";
    import BindGroups from "$lib/bindGroups.svelte";
    import Transition from "$lib/transitionDemo.svelte";
    import SlideyBar from "$lib/ui/slideyBar.svelte";
    import Todo from "$lib/ui/todoDemo.svelte";
    import Editbox from "$lib/ui/editbox.svelte";

    import Footer from "$lib/footer.svelte";

    const sell = {
        amount: "42",
        username: "willTomasini"
    };

    export let data;
</script>

<h1>You found Will's website</h1>

<Sellout {...sell}/>                

<Counter/>

<CheckEmail/>

<InputDemo/>

<BindGroups/>

<br>

<Todo/>

<br>
<Transition/>

<Editbox/>

<br>
<br>
<SlideyBar/>

<br>
<br>
<Footer/>

<style>
    h1 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>