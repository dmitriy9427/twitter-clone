import search from '../../images/search.svg';
import "./Widgets.scss"

const Widgets = () => {
    return (
        <section className="widgets">

            <label className='widgets__label' htmlFor="search">
                <img className='widgets__label-img' src={search} alt="icon-search" />
                <input className='widgets__label-input' id='search' type="text" placeholder='Найти твит ...' />
            </label>



        </section>
    )
}

export default Widgets;