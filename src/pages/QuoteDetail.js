import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Rick", text: "Learning React is fun!" },
  { id: "q2", author: "Rickster", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        {/* Added this code on my own to provide hide functionality of comments */}
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}`}>
            Hide Comments
          </Link>
        </div>
        {/* alternative path if wrapped comp is not a link: path={'/quotes/:quoteId/comments'} */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
