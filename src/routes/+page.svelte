<script>
    import Sellout from "$lib/sellout.svelte";
    import Counter from "$lib/counter.svelte";
    import InputDemo from "$lib/inputDemo.svelte";
    import CheckEmail from "$lib/checkEmail.svelte";
    import BindGroups from "$lib/bindGroups.svelte";
    import TickDemo from "$lib/tickDemo.svelte";
    import StoreDemo from "$lib/store/counterDemo.svelte";
    import ClockStore from "$lib/store/clockStore.svelte";
    import Logo from "$lib/logo.svelte";
    import Footer from "$lib/footer.svelte";

    const sell = {
        amount: "42",
        username: "willTomasini"
    };
</script>

<h1>You found Will's website</h1>

<Sellout {...sell}/>                

<Counter/>

<CheckEmail/>

<InputDemo/>

<BindGroups/>

<TickDemo/>

<StoreDemo/>

<ClockStore/>

<Footer/>

<style>
    h1 {
        color: darkblue;
        font-family: "Comic Sans MS", cursive;
        font-size: 2em;
    }
</style>