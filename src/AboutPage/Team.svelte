<script>

    import Heading from '../components/Heading-3.svelte';
    import MemberCards from './MemberCards.svelte';

    const headingName = "Team";
    const members = [
        {
            name: "Pinki Pathak",
            photo: "pinki.png",
            designation: "Manager & Councellor",
            mantra: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: "Baliram Sah",
            photo: "baliram.png",
            designation: "Technical Head & Product Manager",
            mantra: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: "Ritu Saxena",
            photo: "ritu.png",
            designation: "Director",
            mantra: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ]

</script>

<style>

    .rvp-team-section{
        background-color: var(--cream);
        padding-top: 3vh;
        padding-bottom: 3vh;
    }

</style>

<div class="container-fluid text-center rvp-team-section">
    <Heading {headingName}/>
    {#each members as member, i}
        <MemberCards {member} {i}/>
    {/each}
</div>