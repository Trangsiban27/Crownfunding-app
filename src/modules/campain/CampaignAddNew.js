import React, { Fragment, useEffect, useMemo, useState } from "react";
import LayoutDashBoard from "../../layout/LayoutDashBoard";
import TextInput from "../../components/TextInput";
import { useForm } from "react-hook-form";
import Dropdown from "../../components/dropdown/Dropdown";
import Select from "../../components/dropdown/Select";
import List from "../../components/dropdown/List";
import Option from "../../components/dropdown/Option";
import Label from "../../components/Label";
import Textarea from "../../components/Textarea";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import Button from "../../components/Button";
import useOnChange from "../../hooks/useOnChange";
import Search from "../../components/dropdown/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import ImageUpload from "./parts/ImageUpload";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { control, handleSubmit, setValue, reset, watch } = useForm({});
  const [filterCountries, setFilterCountries] = useOnChange(200);
  const [countries, setCountries] = useState([]);
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    //https://restcountries.com/v3.1/name/{name}?fullText=true
    const getCountries = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountries}?fullText=true`
        );

        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCountries();
  }, [filterCountries]);

  const handleSelectDropdown = (name, value) => {
    setValue(name, value);
  };

  const resetValue = () => {
    setContent("");
    setStartDate("");
    setEndDate("");
    reset({});
  };

  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        // upload: async (file) => {
        //   console.log("upload: ~ file", file);
        //   const bodyFormData = new FormData();
        //   console.log("upload: ~ bodyFormData", bodyFormData);
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: imgbbAPI,
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );
  const HandleAddNewCampaign = async (values) => {
    console.log(values);

    try {
      await axios.post("http://localhost:4001/api/campaigns", {
        ...values,
        content,
        startDate,
        endDate,
      });

      resetValue();
      toast.success("Add new campaign successfully");
    } catch (error) {
      toast.error("Can not add new campaign");
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center bg-white py-10 px-[66px] shadow-md">
        <div className="inline-flex px-16 py-4 mb-10 text-2xl font-bold rounded-lg bg-text4 text-text2 bg-opacity-10">
          Start a campaign
        </div>

        <form className="w-full" onSubmit={handleSubmit(HandleAddNewCampaign)}>
          <div className="flex items-start w-full mb-6 gap-x-12">
            <TextInput
              label="Campaign Titel *"
              name="title"
              text="Write a title"
              className="w-full"
              control={control}
            ></TextInput>
            <div className="flex flex-col">
              <Label>Select a category *</Label>
              <Dropdown>
                <Select
                  placeholder={
                    getDropdownLabel("category") || "Select your category"
                  }
                  className="w-[600px]"
                ></Select>
                <List>
                  <Option
                    onClick={() =>
                      handleSelectDropdown("category", "Architecture")
                    }
                  >
                    Architecture
                  </Option>
                </List>
              </Dropdown>
            </div>
          </div>
          <div className="mb-6">
            <Label name="short_desc">Short Description *</Label>
            <Textarea
              name="short_desc"
              text="Write a short description...."
              control={control}
            ></Textarea>
          </div>
          <div className="mb-10">
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </div>
          <div className="mb-10">
            <Label>Image *</Label>
            <ImageUpload onChange={setValue} name="image"></ImageUpload>
          </div>
          <div className="flex items-center w-full py-12 mb-10 rounded-lg bg-opacity-90 px-11 bg-secondary gap-x-5">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2260_3096)">
                <path
                  d="M26.4997 9.979H13.1663C12.6663 9.979 12.333 10.3123 12.333 10.8123C12.333 11.3123 12.6663 11.6457 13.1663 11.6457H26.4997C26.9997 11.6457 27.333 11.3123 27.333 10.8123C27.333 10.3123 26.9997 9.979 26.4997 9.979Z"
                  fill="white"
                />
                <path
                  d="M12.4999 7.81266C12.4999 8.146 12.8332 8.31266 13.1666 8.31266H26.4999C26.8332 8.31266 27.1666 8.146 27.1666 7.81266L30.4999 1.146C30.6666 0.812663 30.6666 0.479329 30.3332 0.145996C30.1666 -0.0206706 29.8332 -0.0206706 29.4999 0.145996L23.3332 3.146L20.4999 0.312663C20.1666 -0.0206706 19.6666 -0.0206706 19.3332 0.312663L16.3332 3.146L10.1666 0.145996C9.83324 -0.0206706 9.4999 -0.0206706 9.16657 0.145996C8.83324 0.312663 8.9999 0.812663 9.16657 1.146L12.4999 7.81266Z"
                  fill="white"
                />
                <path
                  d="M27.1667 13.6456C27 13.4789 26.6667 13.3123 26.5 13.3123H13.1667C13 13.3123 12.6667 13.4789 12.5 13.6456C12.1667 13.9789 4 22.6456 4 27.4789C4 34.3123 11.1667 39.9789 19.8333 39.9789C28.5 39.9789 35.6667 34.3123 35.6667 27.4789C35.6667 22.6456 27.5 13.9789 27.1667 13.6456ZM20.6667 33.3123V34.1456C20.6667 34.6456 20.3333 34.9789 19.8333 34.9789C19.3333 34.9789 19 34.6456 19 34.1456V33.3123C17.1667 32.9789 15.8333 31.8123 15.6667 30.3123C15.6667 29.8123 16 29.4789 16.5 29.4789C17 29.4789 17.3333 29.8123 17.3333 30.3123C17.3333 30.9789 18.1667 31.6456 19 31.8123V28.4789C16.8333 27.9789 15.6667 26.8123 15.6667 25.3123C15.6667 23.6456 17.1667 22.3123 19 21.9789V21.1456C19 20.6456 19.3333 20.3123 19.8333 20.3123C20.3333 20.3123 20.6667 20.6456 20.6667 21.1456V21.6456C22.5 21.9789 23.8333 23.1456 24 24.6456C24 25.1456 23.6667 25.4789 23.1667 25.4789C22.6667 25.4789 22.3333 25.1456 22.3333 24.6456C22.3333 23.9789 21.5 23.3123 20.6667 23.1456V26.4789C22.8333 26.9789 24 28.1456 24 29.6456C24 31.6456 22.5 32.9789 20.6667 33.3123Z"
                  fill="white"
                />
                <path
                  d="M20.667 28.4785V31.4785C21.667 31.3119 22.3337 30.6452 22.3337 29.9785C22.3337 29.3119 21.8337 28.8118 20.667 28.4785Z"
                  fill="white"
                />
                <path
                  d="M17.333 24.9788C17.333 25.6454 17.833 26.1454 18.9997 26.4788V23.4788C17.9997 23.6454 17.333 24.3121 17.333 24.9788Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2260_3096">
                  <rect
                    width="39.6667"
                    height="39.9579"
                    fill="white"
                    transform="translate(0 0.0209961)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-2xl font-bold text-white">
              You will get 90% of total raised
            </span>
          </div>
          <div className="flex items-start w-full mb-6 gap-x-12">
            <TextInput
              label="Goal *"
              name="goal"
              text="$0.00 USD"
              className="w-full"
              control={control}
            ></TextInput>
            <TextInput
              label="Raised Amount *"
              name="amount"
              text="$0.00 USD"
              className="w-full"
              control={control}
            ></TextInput>
          </div>
          <div className="flex items-start w-full mb-6 gap-x-12">
            <div className="w-full">
              <TextInput
                label="Amount Prefilled"
                name="prefilled"
                text="Amount Prefilled"
                className="w-full"
                control={control}
              ></TextInput>
              <span className="text-sm text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </span>
            </div>
            <div className="w-full">
              <TextInput
                label="Video"
                name="video"
                text="Video"
                className="w-full"
                control={control}
              ></TextInput>
              <span className="text-sm text-text3">
                Place Youtube or Vimeo Video URL
              </span>
            </div>
          </div>
          <div className="flex items-start w-full mb-6 gap-x-12">
            <div className="flex flex-col">
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Select placeholder="Select one" className="w-[600px]"></Select>
                <List>
                  <Option>Architecture</Option>
                  <Option>Crypto</Option>
                </List>
              </Dropdown>
            </div>
            <div className="flex flex-col">
              <Label>Counrty</Label>
              <Dropdown>
                <Select
                  placeholder="Select a country"
                  className="w-[600px]"
                ></Select>
                <List>
                  <Search onChange={setFilterCountries}></Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Option>{country?.name?.common}</Option>
                    ))}
                </List>
              </Dropdown>
            </div>
          </div>
          <div className="flex items-start w-full mb-6 gap-x-12">
            <div className="flex flex-col w-full">
              <Label>Start date</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col w-full">
              <Label>End date</Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <Button className="px-10 mx-auto" type="submit">
            Submit new campaign
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default CampaignAddNew;
