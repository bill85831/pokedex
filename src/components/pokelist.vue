<template>
    <div>
        <div class="searchbar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search pokemon by No. or Name" v-model="searchvalue">
        </div>
        <div class="pokelist">
            <article v-for="(pokemon, index) in pokeFilteredList"
                :key="'poke'+index"
                @click="setPokemonUrl(pokemon.url)">
                <img :src="imageUrl + pokemon.id + '.png'" width="170" height="170" alt="">
                <h3> No. {{ pokemon.id }} {{ pokemon.name }}</h3>
            </article>
            <div id="scroll-trigger" ref="infinitescrolltrigger">
                <i class="fas fa-spinner fa-pulse"></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: [
        'imageUrl',
        'apiUrl',
    ],
    data() {
        return {
            pokemons: [],
            nextUrl: '',
            currentUrl: '',
            searchvalue: '',
        }
    },
    computed: {
        pokeFilteredList() {
            return this.pokemons.filter(pokemon => {
                return (pokemon.id + ' ' + pokemon.name).toLowerCase().includes(this.searchvalue.toLowerCase())
            })
        }
    },
    methods: {
        fetchData() {
        // let req = new Request(this.currentUrl);
            // 抓取所有pokemon的資料
            fetch(this.currentUrl)
            .then((response) => {
                if(response.status === 200)
                    return response.json();
            })
            .then((data) => {
                this.nextUrl = data.next;
                // 抓取個別pokemon的資料
                data.results.forEach(pokemon => {
                    // 抓取下來的資料，key僅有name與url，藉由分割url與篩選，新增id的key
                    pokemon.id = pokemon.url.split('/')
                    .filter(el => el ).pop();
                    // 將整個object收入至pokemons這個list
                    this.pokemons.push(pokemon);
                });
            })
            .catch((error) => {
                console.log(error);
            })
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio && this.nextUrl) {
                        this.next();
                    }
                });
            });
            // this.$refs 取得元件的實體
            observer.observe(this.$refs.infinitescrolltrigger);
        },
        next() {
            this.currentUrl = this.nextUrl;
            this.fetchData();
        },
        setPokemonUrl(url) {
            // 對應到父層(pokeindex.vue)的@setPokemonUrl
            this.$emit('setPokemonUrl', url);
        }
    },
    created() {
        this.currentUrl = this.apiUrl;
        this.fetchData();
    },
    mounted() {
        this.scrollTrigger();
    }

};
   
</script>

<style lang="scss" scoped>

.searchbar {
    margin: 0 0 20px 0;
    position:relative;
    display:inline-block;

    i {
        color: #6d7179; 
        position: absolute; 
        left: 10px;
        top: 13px;
    }

    input {
        text-indent: 20px;
        border-radius: 20px;
        border: 3px solid;
        width: 400px;
        padding: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,.2);   
        font-size: 16px;

        &:focus {
            outline: none;
            border: 3px solid #2d5db6;
        }
    }
}


.pokelist {
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 10px;
    width: 80%;
    // max-width: 1000px;    

    article {
        height: 220px;
        background-color: #efefef;
        text-align: center;
        text-transform: capitalize;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);      
        h3 {
            margin: 0;
        }
    }
    #scroll-trigger {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        font-size: 2rem;
        color: #efefef;
    }
}

</style>