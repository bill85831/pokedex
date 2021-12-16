<template>
    <div class="detail">
        <div class="detail-card" v-if="show">
            <div v-if="pokemon" class="image">
                <img :src="imageUrl + pokemon.id + '.png'" alt="">
            </div>
            <div v-if="pokemon" class="data-content">
                <h2 class="card-title">{{ pokemon.name }}</h2>
                <div class="property">
                    <div class="left bold">Base Experience</div>
                    <div class="right">{{ pokemon.base_experience }} XP</div>
                </div>

                <div class="property">
                    <div class="left bold">Height</div>
                    <div class="right">{{ pokemon.height / 10 }} m</div>
                </div>
                <div class="property">
                    <div class="left  bold">Weight</div>
                    <div class="right">{{ pokemon.weight / 10 }} kg</div>
                </div>
                <h3>Types</h3>
                <div class="types">
                    <div class="type" 
                        v-for="(value, index) in pokemon.types"
                        :key="'value'+index">
                        <span :class="value.type.name">
                            {{ value.type.name }}
                        </span>
                    </div>
                </div>
                <h3>Abilities</h3>
                <div class="abilities">
                    <div class="ability" 
                        v-for="(value, index) in pokemon.abilities"
                        :key="'value'+index">
                        {{ value.ability.name }}
                    </div>
                    <div class="right inactive">{{pokemon.moves.map(item => ' ' + item.move.name).toString()}} .</div>
                </div>
                <h3>Wild Hold Item</h3>
                <div class="HeldItem">
                    <div class="item" 
                        v-for="(value, index) in pokemon.held_items"
                        :key="'value'+index">
                        {{ value.item.name }}
                    </div>
                </div>
                <h3>Species strength</h3>
                <div class="stats">
                    <table class="base-stat">
                        <tr>
                            <td>HP : {{ pokemon.stats[0].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[0].base_stat)"></div></td>
                        </tr>
                        <tr>
                            <td>Atk : {{ pokemon.stats[1].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[1].base_stat)"></div></td>
                        </tr>
                        <tr>
                            <td>Def : {{ pokemon.stats[2].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[2].base_stat)"></div></td>
                        </tr>
                        <tr>
                            <td>SpA : {{ pokemon.stats[3].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[3].base_stat)"></div></td>
                        </tr>
                        <tr>
                            <td>SpD : {{ pokemon.stats[4].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[4].base_stat)"></div></td>
                        </tr>
                        <tr>
                            <td>SP : {{ pokemon.stats[5].base_stat }}</td>
                            <td class="bar-content"><div :style="barStyle(pokemon.stats[5].base_stat)"></div></td>
                        </tr>
                    </table>
                </div>
            </div>
            <h2 v-else>The pokemon was not found</h2>
            <button class="close" @click="closeDetail">Close</button>
        </div>
        <i v-else class="fas fa-spinner fa-pulse"></i>
    </div>
</template>



<script>
export default {
    props: [
        'pokemonUrl',
        'imageUrl'
    ],
    data() {
        return {
            show: false,
            pokemon: {}
        }      
    },
    methods: {
        fetchData() {
            // let req = new Request(this.pokemonUrl);
            fetch(this.pokemonUrl)
            .then((response) => {
                if(response.status === 200)
                    return response.json();
            })
            .then((data) => {
                console.log(data);
                this.pokemon = data;
                this.show = true;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        barStyle(data) {
            return {
                "width": "calc(100% * " + data/255 +")",
                "height": "20px",
                "background-color": "rgb(214, 126, 126)"
            };
        },
        closeDetail() {
            this.$emit('closeDetail');
        }
    },
    created() {
        this.fetchData();
    }
}
</script>


<style lang="scss" scoped>
    
.type {
    .grass {background:rgb(3, 139, 44) !important;}
    .poison {background:rgb(74, 7, 105) !important;}
    .water {background:rgb(8, 135, 219) !important;}
    .dragon {background:rgb(27, 2, 68) !important;}
    .ice {background:rgb(78, 199, 255) !important;}
    .flying {background:rgb(145, 215, 255) !important;}
    .fire {background:rgb(238, 135, 17) !important;}
    .ghost {background:rgb(74, 52, 87) !important;}
    .fighting {background:rgb(122, 0, 0) !important;}
    .normal {background:rgb(104, 104, 104) !important;}
    .psychic {background:rgb(195, 0, 255) !important;}
    .bug {background:rgb(52, 87, 6) !important;}
    .dark {background:rgb(43, 43, 43) !important;}
    .steel {background:rgb(116, 116, 116) !important;}
    .fairy {background:rgb(248, 165, 237) !important;}
    .electric {background:rgb(228, 195, 7) !important;}
    .rock {background:rgb(88, 95, 100) !important;}
    .ground {background:rgb(92, 70, 70) !important;}
}
    
i.fa-spinner {
    text-align: center;
}

.bold {
    font-weight: bold;
}

.detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    padding: 90px 10px 10px;
    //width: calc(100% - 20px);
    // height: calc(100vh - 20px);
    width: 100%;
    height: 100vh;
    background: rgba(10, 7, 0, 0.562);

    .detail-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90%;
        padding: 50px 0 0;
        position: relative;
        max-width: 510px;
        // max-height: 800px;
        // overflow-y: auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);

        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -60px;
            width: 120px;
            height: 120px;
            background-color: #ffcb04;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0,0,0,.2),
                        0 10px 10px rgba(0,0,0,.2);
        }

        .data-content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 100%;
            margin-bottom: 40px;

            h2 {
                text-transform: capitalize;
            }

            .property {
                width: 90%;
                max-width: 400px;
                border-bottom: 1px solid #ccc;
                margin-bottom: 10px;

                .left { float: left; }
                .right { float: right; }
                
            }

            h3 {
                width: 90%;
                max-width: 400px;
                border-bottom: 1px solid #ccc;
            }

            .types {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 90%;
                max-width: 400px;

                .type { 
                    // color: rgb(17, 67, 182);
                    margin: 0 0 10px 0;
                    padding: 5px 10px;
                    font-weight: bold;
                    font-size: 14px;
                    letter-spacing: 1px;
                    text-transform: capitalize;
                        span {
                            color: #ffffff !important;            
                            padding: 10px 14px;
                            border-radius: 29px;   
                        }
                }
                
            }

            .abilities {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 90%;
                max-width: 400px;

                .ability {
                    color: rgb(31, 112, 204);
                    margin: 0 10px 10px 0;
                    border-radius: 20px;
                    padding: 5px 10px;
                    font-weight: bold;
                    font-size: 14px;
                    letter-spacing: 1px;
                    text-transform: capitalize;
                    word-wrap: none;
                    word-break: keep-all;
                    background-color: #ffffff;
                    border: 3px solid;
                }
            }

            .HeldItem {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 90%;
                max-width: 400px;

                .item {
                    color: rgb(21, 136, 36);
                    margin: 0 10px 10px 0;
                    border-radius: 20px;
                    padding: 5px 10px;
                    font-weight: bold;
                    font-size: 14px;
                    letter-spacing: 1px;
                    text-transform: capitalize;
                    word-wrap: none;
                    word-break: keep-all;
                    background-color: #ffffff;
                    border: 3px solid;
                }
            }

            .stats {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 90%;
                max-width: 400px;

                table {
                    width: 350px;
                    border-spacing: 0;
                    border-collapse: collapse;

                    .bar-content {
                        width: 255px;
                    }
                }

            }
        }

        .close {
            outline: none;
            border: none;
            border-radius: 5px;
            background-color: #C73015;
            color: #efefef;
            padding: 10px 20px;
            margin-bottom: 20px;
            font-size: 1.2rem;
            cursor: pointer;
        }
    }

    i {
        font-size: 2rem;
        color: #efefef;
    }



}


.inactive {
    display: none;
}


</style>