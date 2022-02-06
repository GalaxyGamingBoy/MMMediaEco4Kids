<script>
    import { activePage } from "../../stores";
    export let ElementTitle = "";
    export let ElementLink = "";

    let ElementTitleLowercase = ElementTitle.toLowerCase();

    function clicked() {
        console.log(ElementTitleLowercase.concat(": Clicked"));
        activePage.set(ElementTitleLowercase);
        console.log($activePage);
    }

    let extraClasses = "";

    $: $activePage, decideExtraClasses();
    function decideExtraClasses() {
        if ($activePage == ElementTitleLowercase) {
            extraClasses = "active";
        } else {
            extraClasses = "";
        }
    }
</script>

<li class="nav-item">
    <a
        class="nav-link {extraClasses}"
        aria-current="page"
        href={ElementLink}
        on:click={clicked}>{ElementTitle}</a
    >
</li>
