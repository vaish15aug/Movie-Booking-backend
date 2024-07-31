const Movie=require('../models');
const movieSchema=require('../schema/movie.schema');
const movieService=require('../services/movie.service');


async function createMovie(req,res){
    const movieData=req.body;
    console.log(movieData);

const {error,value}= movieSchema.movieCreateSchema.validate(movieData);
if(error){
    return res.status(422).send(error.message);

}
const user=res.locals.user;
const userId=user.id;
movieData["createdBy"]=userId;
const createdMovie = await movieService.createMovie(movieData);
    return res.status(201).send({ msg: 'Movie created successfully' });
} 

//to get all movie list
async function getAllMovieList(req,res){
    const {page=1,pageSize=10,searchText=' '}=req.query;
    const getAllMovieData=req.body
    console.log(getAllMovieData);

    const allMovie= await movieService.getAllMovie({
        search:searchText,
        offset:(page-1)*pageSize,
        limit:pageSize
    });
    const {count ,rows}=getAllMovieList;
    const totalPages=Math.ceil(count/pageSize);

    res.status(200).send({
        data:rows,
        page:parseInt(page),
        pageSize:parseInt(pageSize),
        totalmovies:count,
        totalPages
    });
    if(!allMovie){
        return res.staus(404).send(error.message);
    }
    return res.status(200).send({data:getAllMovieList})
}

// find one movie

async function getMovieByTitle(req,res){
 const movieTitle=req.body;
 console.log(movieTitle);

 const movie=await movieService.getMovieByTitle(movieTitle);
 
if(!movie){
    return res.status(404).send({msg:'Movie not found'});
}
return res.status(200).send(movie);
}

module.exports={createMovie,getAllMovieList,getMovieByTitle}