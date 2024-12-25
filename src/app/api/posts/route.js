import connectMongo from '../../../../utils/connectMongo';
import PostModal from '../../../../models/postModel';
connectMongo;
export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q');
  console.log(query);
  try {
    await connectMongo();
    let postData;
    if (query) {
      postData = await PostModal.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { description: new RegExp(query, 'i') },
        ],
      });
    } else {
      postData = await PostModal.find({});
    }
    return Response.json(postData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
