<script>
    import NavBar from "./components/NavBar.svelte";
    import Footer from "./components/Footer.svelte";
    import Home from "./components/Home.svelte";
    import About from "./components/About.svelte";
    import Login from "./components/Login.svelte";
    import Admin from "./components/Admin.svelte";
    import Roles from "./components/Roles.svelte";

    import { activePage, isLoggedIn } from "./stores";

    activePage.set("home");
</script>

<main>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

    <NavBar NavBarTitle="Eco4Kids" />
    <a href="https://ibb.co/SfQ2Gt3"
        ><img
            src="https://i.ibb.co/dmbSxP5/LogoV2.png"
            alt="LogoV2"
            border="0"
            width="100"
        /></a
    >
    {#if $activePage == "home"}
        <Home />
    {:else if $activePage == "about"}
        <About />
    {:else if $activePage == "login"}
        {#if $isLoggedIn == 1}
            <Admin />
        {:else}
            <Login />
        {/if}
    {:else if $activePage == "roles"}
        <Roles />
    {/if}
    <Footer />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
