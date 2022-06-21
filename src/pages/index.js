import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { style } from "../components/style";

const PreStyle = styled.div`
  position: relative;
  top: -38px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding-top: 2rem;
  background-color: #fff;
  z-index: 0;

  p {

  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
    min-height: 700px;
  }
`;

const ParagraphGroup = styled.div`

`;

const IndexPage = () => (
  <Layout>
		<SEO
			title="The Crucible Standard"
			description="The Crucible Standard - America's Second Most Trusted Source"
    />
    <PreStyle>
      <h1>The Crucible Standard</h1>
			<h2>Index</h2>
      <h3>Relatively Boring</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis leo vel fringilla est ullamcorper. Vel quam elementum pulvinar etiam. Tempus urna et pharetra pharetra massa massa ultricies mi. Risus nec feugiat in fermentum posuere. Id diam maecenas ultricies mi eget mauris pharetra. Iaculis eu non diam phasellus vestibulum lorem sed. Maecenas sed enim ut sem viverra aliquet eget. Sagittis id consectetur purus ut faucibus pulvinar. Amet porttitor eget dolor morbi non arcu risus. Dolor magna eget est lorem. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Pharetra vel turpis nunc eget.</p>
      <p>Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Ultricies tristique nulla aliquet enim tortor at auctor urna. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Velit euismod in pellentesque massa placerat duis ultricies. Tellus pellentesque eu tincidunt tortor aliquam. Sit amet cursus sit amet. Massa enim nec dui nunc mattis enim ut tellus. Elementum sagittis vitae et leo duis ut diam quam. Augue eget arcu dictum varius duis at. Sed vulputate odio ut enim blandit. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ridiculus mus mauris vitae ultricies leo integer malesuada. Sed egestas egestas fringilla phasellus faucibus scelerisque. Scelerisque felis imperdiet proin fermentum leo vel. Fermentum leo vel orci porta non. Donec et odio pellentesque diam volutpat commodo sed.</p>
      <p>Feugiat nisl pretium fusce id velit ut tortor pretium. Volutpat blandit aliquam etiam erat. Urna porttitor rhoncus dolor purus non. Pharetra magna ac placerat vestibulum lectus mauris. Adipiscing vitae proin sagittis nisl rhoncus. Sit amet justo donec enim diam vulputate ut pharetra sit. Ac turpis egestas maecenas pharetra convallis posuere morbi. Augue lacus viverra vitae congue eu consequat. Et ultrices neque ornare aenean. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Aenean sed adipiscing diam donec. Ante in nibh mauris cursus. Turpis cursus in hac habitasse platea. Interdum posuere lorem ipsum dolor sit amet.</p>
      <p>Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Orci sagittis eu volutpat odio facilisis mauris sit amet. Etiam erat velit scelerisque in. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Viverra aliquet eget sit amet tellus cras adipiscing enim. In eu mi bibendum neque egestas congue quisque egestas. Pellentesque eu tincidunt tortor aliquam. Pulvinar neque laoreet suspendisse interdum. Ultrices tincidunt arcu non sodales neque sodales. Non nisi est sit amet facilisis magna etiam tempor. Accumsan lacus vel facilisis volutpat est velit egestas. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Cursus euismod quis viverra nibh cras pulvinar mattis. Ornare arcu dui vivamus arcu. Parturient montes nascetur ridiculus mus mauris.</p>
      <p>Eget aliquet nibh praesent tristique magna sit. Hendrerit dolor magna eget est lorem. Diam sit amet nisl suscipit adipiscing. Quis varius quam quisque id. Id cursus metus aliquam eleifend mi in. Suspendisse in est ante in nibh mauris cursus. Elit scelerisque mauris pellentesque pulvinar pellentesque. Risus in hendrerit gravida rutrum quisque. Nunc sed id semper risus in hendrerit gravida. Elementum integer enim neque volutpat ac. Sit amet risus nullam eget felis eget nunc lobortis. Vitae turpis massa sed elementum tempus egestas. Vitae congue eu consequat ac felis donec et odio pellentesque. Turpis in eu mi bibendum neque egestas. Amet consectetur adipiscing elit ut. Congue eu consequat ac felis donec et odio pellentesque. Dolor morbi non arcu risus. Enim praesent elementum facilisis leo vel fringilla est. Dui faucibus in ornare quam viverra. Enim eu turpis egestas pretium aenean pharetra magna ac placerat.</p>
	  </PreStyle>
  </Layout>
)

export default IndexPage
