import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';




function AddSongs(){
    const formik = useFormik(
        {
            initialValues: {
                image:'',
                name:'',
                singer:'',
                musicDirector:'',
                releaseDate:'',
                album:'',
               
            },
            validationSchema: Yup.object({
                image: Yup.string().required('Image URL is required'),
                name: Yup.string().min(5,'Name must be at least 5 characters').required('Name is required'),
                singer: Yup.string().required('singer Name is required'),
                musicDirector: Yup.string().required('Music Director Name is required'),
                releaseDate: Yup.date().required('Release Date is required'),
                album:Yup.string().required('Album is Required')
            })
            ,
            onSubmit:(values , {setSubmitting, resetForm , setStatus})=> {
                axios.post('http://localhost:5000/songs',values)
                    .then(response => {
                        setStatus('success');
                        resetForm();
                    })
                    .catch(error => {
                        setStatus('error');
                    })
                    .finally(()=>{
                        setSubmitting(false);
                    });
            },
        });




    return (
        <div className='container mt-4' style={{backgroundImage:'url("https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
            <h2 style={{color:"white"}}>Add New Song Albums</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='image' className='form-label' style={{color:"white"}}>Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                        data-testid="image"
                    />


                    {
                        formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='name' className='form-label' style={{color:"white"}}>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        data-testid="name"
                    />


                    {
                        formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='singer' className='form-label' style={{color:"white"}}>Singer</label>
                    <input
                        id="singer"
                        name="singer"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.singer}
                        data-testid="singer"
                    />


                    {
                        formik.touched.singer && formik.errors.singer ? <div className='text-danger'>{formik.errors.singer}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='musicDirector' className='form-label' style={{color:"white"}}>Music Director</label>
                    <input
                        id="musicDirector"
                        name="musicDirector"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}


                        value={formik.values.musicDirector}
                        data-testid="musicDirector"
                    />


                    {
                        formik.touched.musicDirector && formik.errors.musicDirector ? <div className='text-danger'>{formik.errors.musicDirector}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='color' className='form-label' style={{color:"white"}}>Release Date</label>
                    <input
                        id="releaseDate"
                        name="releaseDate"
                        type="date"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.releaseDate}
                        data-testid="releaseDate"
                    />


                    {
                        formik.touched.releaseDate && formik.errors.releaseDate ? <div className='text-danger'>{formik.errors.releaseDate}</div>
                        : null


                    }  
                </div>




                <div className='mb-3'>
                    <label htmlFor='album' className='form-label' style={{color:"white"}}>Album</label>
                    <input
                        id="album"
                        name="album"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.album}
                        data-testid="seats"
                    />


                    {
                        formik.touched.album && formik.errors.album ? <div className='text-danger'>{formik.errors.album}</div>
                        : null


                    }  
                </div>






                <button  type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                    Add New Song
                </button>




                {
                    formik.status && formik.status ===  'success' && (
                        <span data-testid='response' className='text-success' >Success</span>
                    )
                }


                {
                    formik.status && formik.status ===  'error' && (
                        <span data-testid='response' className='text-danger' >Error</span>
                    )


                }




            </form>
        </div>
    )
}


export default AddSongs;
