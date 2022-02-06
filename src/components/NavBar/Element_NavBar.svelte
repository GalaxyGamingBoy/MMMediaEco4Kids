<script>
    import { activePage } from "../../stores";
    export let ElementTitle = "";
    export let ElementLink = "";
    export let ElementActive = "false";

    let ElementTitleLowercase = ElementTitle.toLowerCase();

    function clicked() {
        console.log(ElementTitleLowercase.concat(": Clicked"));
        activePage.set(ElementTitleLowercase);
        console.log($activePage);
    }
</script>

{#if ElementActive == "true"}
    <li class="nav-item">
        <a
            class="nav-link active"
            aria-current="page"
            href={ElementLink}
            on:click={clicked}>{ElementTitle}</a
        >
    </li>
{:else}
    <li class="nav-item">
        <a
            class="nav-link"
            aria-current="page"
            href={ElementLink}
            on:click={clicked}>{ElementTitle}</a
        >
    </li>{/if}
