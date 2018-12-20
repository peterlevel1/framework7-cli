import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page name="settings">
    <Navbar title="Settings" />

    <BlockTitle>Form Example</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></ListInput>

      <ListInput
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </ListInput>

      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></ListInput>

      <List-item
        title="Toggle"
      >
        <Toggle slot="after" />
      </List-item>

      <ListInput
        label="Range"
        input={false}
      >
        <Range slot="input" value={50} min={0} max={100} step={1} />
      </ListInput>

      <ListInput
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>

    <BlockTitle>Buttons</BlockTitle>
    <Block strong>
      <Row tag="p">
        <Button className="col">Button</Button>
        <Button className="col" fill>Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised>Raised</Button>
        <Button className="col" raised fill>Raised Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" round>Round</Button>
        <Button className="col" round fill>Round Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" outline>Outline</Button>
        <Button className="col" round outline>Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small outline>Small</Button>
        <Button className="col" small round outline>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" small fill>Small</Button>
        <Button className="col" small round fill>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large raised>Large</Button>
        <Button className="col" large fill raised>Large Fill</Button>
      </Row>
      <Row tag="p">
        <Button className="col" large fill raised color="red">Large Red</Button>
        <Button className="col" large fill raised color="green">Large Green</Button>
      </Row>
    </Block>

    <BlockTitle>Checkbox group</BlockTitle>
    <List>
      <List-item
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></List-item>
      <List-item
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></List-item>
      <List-item
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></List-item>
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List>
      <List-item
        radio
        name="radio"
        value="Books"
        title="Books"
      ></List-item>
      <List-item
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></List-item>
      <List-item
        radio
        name="radio"
        value="Food"
        title="Food"
      ></List-item>
    </List>
  </Page>
);