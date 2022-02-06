<script>
    export let element = "";
    export let type = "row";
    export let bold = "false";
</script>

{#if bold == "true"}
    <th scope={type}>{element}</th>
{:else}
    <td>{element}</td>
{/if}
