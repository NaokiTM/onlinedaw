<script>
// @ts-nocheck
    import logo from "$lib/assets/logo.png"
</script>

    <!-- ADD ATTRIBUTION LATER / SWITCH OUT LOGO -->
    <!-- <a href="https://www.flaticon.com/free-icons/music-note" title="music note icons">Music note icons created by Freepik - Flaticon</a>  -->

<nav class="bg-neutral-800 text-white space-x-2 flex items-center text-sm z-10">

    <!-- ADD ATTRIBUTION LATER / SWITCH OUT LOGO -->
    <!-- <a href="https://www.flaticon.com/free-icons/music-note" title="music note icons">Music note icons created by Freepik - Flaticon</a>  -->
    <div class="inline-block scale-50">
        <img src={logo} alt="logo">
    </div>

    <div class="relative inline-block group">
        <button class="rounded-sm pl-1">File</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">New project</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Open project</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Save project</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Share</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Close project</button></li>
        </ul>
    </div>

    <div class="relative inline-block group">
        <button class="rounded-sm">Edit</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">Undo</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Redo</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Copy</button></li>
            <li><button class="btn text-slate-300 rounded-sm">Paste</button></li>

        </ul>
    </div>
    <div class="relative inline-block group">
        <button class="rounded-sm">Add</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">Add instrument</button></li>
        </ul>
    </div>
    <div class="relative inline-block group">
        <button class="rounded-sm">View</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">appearance</button></li>
            <li><button class="btn text-slate-300 rounded-sm">idk</button></li>
        </ul>
    </div>
    <div class="relative inline-block group">
        <button class="rounded-sm">Options</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">option1</button></li>
            <li><button class="btn text-slate-300 rounded-sm">option2</button></li>
        </ul>
    </div>
    <div class="relative inline-block group">
        <button class="rounded-sm text-neutral-300">Help</button>

        <ul class="dropdown-content menu p-2 shadow bg-neutral-700 w-52 absolute hidden group-hover:block rounded-sm">
            <li><button class="btn text-slate-300 rounded-sm">help me</button></li>
            <li><button class="btn text-slate-300 rounded-sm">about</button></li>
        </ul>
    </div>
</nav>

<style>
    button {
        padding-left: 5px;
        padding-right: 5px;
    }
    button:hover {
        background-color: #5e5e5e;
        cursor: pointer;
    }
    ul {
        position: absolute;
    }
</style>