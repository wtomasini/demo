<script>
    export let data;
</script>

<h1>Blog</h1>

<h3>Welcome {data.visited ? ' back friend!' : 'stranger'}</h3>
<h3>This page is under construction, come back soon</h3>

<ul>
    {#each data.summaries as {slug, title}}
        <li><a href="/blog/{slug}">{title}</a></li>
    {/each}
</ul>