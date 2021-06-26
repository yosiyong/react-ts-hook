import { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UserProfile } from "../types/userProfile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type Props = {
  user: UserProfile;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          名前
        </Typography>
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          メール
        </Typography>
        <Typography variant="body2" component="p">
          {user.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          住所
        </Typography>
        <Typography variant="body2" component="p">
          {user.address}
        </Typography>
      </CardContent>
    </Card>
  );
};
