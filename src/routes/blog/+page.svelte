<script>
    export let data;
</script>

<h1>Blog</h1>

<h3>Welcome {data.visited ? ' back friend!' : 'stranger'}</h3>
<h3>This is where I'd put a blog if I had one, but I'm not that self-absorbed.</h3>
<h3>For now, it just serves as a tech demo for parametric URL slugs.</h3>

<ul>
    {#each data.summaries as {slug, title}}
        <li><a href="/blog/{slug}">{title}</a></li>
    {/each}
</ul>