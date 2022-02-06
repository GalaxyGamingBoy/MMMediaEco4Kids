<script>
    import RolesElement from "./Roles/RolesElement.svelte";
    import { rolesJSON } from "../stores";
</script>

<table class="table">
    <thead>
        <tr>
            <RolesElement bold="true" element="#" type="col" />
            <RolesElement bold="true" element="ΡΟΛΟΣ" type="col" />
            <RolesElement bold="true" element="ΟΝΟΜΑ" type="col" />
        </tr>
    </thead>
    <tbody>
        {#each rolesJSON as r (r.id)}
            <tr>
                <RolesElement element={r.id} />
                <RolesElement element={r.role} />
                <RolesElement element={r.name} />
            </tr>
        {/each}
    </tbody>
</table>
