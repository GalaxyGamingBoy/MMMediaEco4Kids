<script>
    import { activePage } from "../stores";
    function changeToAbout() {
        activePage.set("about");
    }
</script>

<h1>Home - Eco4Kids</h1>
<br />
<br />
<br />
<br />
<p>(EN) School project for a business simulation</p>
<p>(GR) Σχολικό έργο για μια επιχειρηματική προσομοίωση.</p>
<br />
<label
    >Learn more about Eco4Kids <button
        class="btn btn-secondary"
        on:click={changeToAbout}>Here</button
    >!</label
>
