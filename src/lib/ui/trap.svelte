<script>
    import { trapFocus } from './actions.js';
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/themes/material.css';

    let content = "Open and close the menu";

    function tooltip(node, options) {
        const tooltip = tippy(node, options);

        return {
            update(options) {
                tooltip.setProps(options);
            },
            destroy() {
                tooltip.destroy();
            }
        };
    }

    let showPopup = false;
</script>

<button
    on:click={() => showPopup = !showPopup}
    use:tooltip={{content, theme: 'material', placement: 'right'}}
>This menu demonstrates focus trapping</button>

{#if showPopup}
    <div
        class="modal-background"
        on:click|self={() => showPopup = false}
        on:keydown={(e) => {
				if (e.key === 'Escape') showPopup = false;
			}}
        role="menu"
        tabindex="0"
    >
        <div class="popup" use:trapFocus>
            <p>Notice how your tab key only selects items in this popup</p>
            <br>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <br>
            <button on:click={() => showPopup = false}>Close</button>
        </div>
    </div>
{/if}