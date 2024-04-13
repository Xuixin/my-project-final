"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const UpdateMenu = ({ params }) => {
  const id = params.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="ชื่อเมนู">ชื่อเมนู</Label>
        <Input type="text" name="menu-name" placeholder="orange juice" />
      </form>
    </div>
  );
};

export default UpdateMenu;
