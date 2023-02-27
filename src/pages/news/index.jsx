import React from "react";
import axios from "axios";
import { baseUrl } from "../../static/api";
import { Loader } from "../../components";
import { Card, CardContent, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NewsPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/posts`).then((response) => {
      setPosts(response.data);
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleCardClick = () => {
    console.log("click");
  };

  return (
    <div style={{ padding: "24px", position: "relative", height: "100vh" }}>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={10} sm={4} md={4}>
              <Card style={{ height: "200px" }} onClick={handleCardClick}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.title}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {post.body.substring(0, 100)}...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

