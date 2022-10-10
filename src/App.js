import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

// import Home from '~/pages/Home';
// import Following from '~/pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((item, index) => {
                        let Layout = DefaultLayout;

                        if (item.Layout) {
                            Layout = item.Layout;
                        } else if (item.Layout === null) {
                            Layout = Fragment;
                        }

                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/follwing" element={<Following />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
