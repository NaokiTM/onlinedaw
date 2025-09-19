
<script>
    import plus from '$lib/assets/plus.png'
    import { TracksArray } from "$lib/stores";

    function addTrack() {
        TracksArray.update(arr => {
            let maxId = arr.length ? Math.max(...arr.map(t => t.id)) : 0;
            let nextId = maxId + 1;
            return [
                ...arr, 
                {id: nextId, instrument: "piano", muted: false}  //allow user to choose instrument before adding a track
            ]
        })
    }
</script>


<div class="h-5 w-full bg-neutral-500">
    <button class="h-full">
        <img src={plus} alt='add' class="hover:cursor-pointer" onclick={addTrack}>
    </button>
</div>