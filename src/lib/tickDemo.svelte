<script>
    import {tick} from 'svelte';

    let text = 'Select some text and hit tab to change its case';

    async function handleKeydown(event) {
        if (event.key !== 'Tab') return;

        event.preventDefault();

        const {selectionStart, selectionEnd, value} = this;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

        text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

        await tick();
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<h3>This is a demonstration of what ticks can do</h3>

<textarea value={text} on:keydown={handleKeydown}></textarea>

<style>
    textarea {
        width: 100%;
        height: 100px;
        resize: none;
    }
</style>
