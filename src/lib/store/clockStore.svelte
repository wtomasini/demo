<script>
    import { time, elapsed } from './stores.js';

    const formatter = new Intl.DateTimeFormat(
        'en',
        {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        }
    );
</script>

<h3>The time is {formatter.format($time)}. This was also done with a store, so it's special.</h3>

<p>This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}. Maybe it's time to go outside?</p>