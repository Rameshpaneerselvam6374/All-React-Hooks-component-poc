function Layout1(value){
    return(
           <>
                <div className="Body1">
                    <h2 id="h1">React App</h2>
                    <section className="s1">
                    <nav className="n1">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Edit">Edit</a></li>
                        <li><a href="#Tool">Tool</a></li>
                    </nav>

                        <article className="a1">
                            <h2>Chennai</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, asperiores quas illo quasi, reprehenderit quis provident, ea molestiae doloremque veniam consectetur ex illum nobis omnis perspiciatis modi vero voluptatem id.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, asperiores quas illo quasi, reprehenderit quis provident, ea molestiae doloremque veniam consectetur ex illum nobis omnis perspiciatis modi vero voluptatem id.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, asperiores quas illo quasi, reprehenderit quis provident, ea molestiae doloremque veniam consectetur ex illum nobis omnis perspiciatis modi vero voluptatem id.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, asperiores quas illo quasi, reprehenderit quis provident, ea molestiae doloremque veniam consectetur ex illum nobis omnis perspiciatis modi vero voluptatem id.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, asperiores quas illo quasi, reprehenderit quis provident, ea molestiae doloremque veniam consectetur ex illum nobis omnis perspiciatis modi vero voluptatem id.</p>

                        </article>
                    </section>
                            <footer className="f1">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                                <button id="submit">Submit</button>
            
                            </footer>
                </div>
                {/* function alert() {
                    <script>
                        document.getElementById('submit').alert="welcome to you";
                    </script>
                    
                } */}
           </>
    );
}

export default Layout1