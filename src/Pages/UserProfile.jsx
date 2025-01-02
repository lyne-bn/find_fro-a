import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState({
    _id: '1234abcd5678efgh9012ijkl',
    name: 'John Doe',
    profession: 'Software Engineer',
    description:
      'Passionate developer with expertise in full-stack development.',
    city: 'San Francisco',
    country: 'USA',
    memberSince: 'Jan 10, 2020',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    profileImage: 'https://via.placeholder.com/150', // Default profile image
  });

  const handleEditField = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    // Make API request here to save changes
    console.log(`Updated ${field}:`, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Update the profileImage field here (API integration)
      const imageUrl = URL.createObjectURL(file); // Preview image
      setUser((prev) => ({ ...prev, profileImage: imageUrl }));
      console.log('Uploaded Image:', file);
    }
  };

  return (
    <div className='bg-[#EAF6FF] min-h-screen flex flex-col items-center py-6'>
      {/* Profile Section */}
      <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-[24rem] border border-[#020B56] mt-4 relative'>
        <label className='absolute top-2 right-2 cursor-pointer'>
          <input type='file' onChange={handleImageUpload} className='hidden' />
          <div className='w-8 h-8 bg-[#1AE3D9] text-white rounded-full flex items-center justify-center'>
            <FaEdit />
          </div>
        </label>
        <img
          src={user.profileImage}
          alt={user.name}
          className='w-24 h-24 mx-auto rounded-full mt-4'
        />
        <h2 className='text-2xl font-bold text-[#020B56] mt-4 text-center'>
          {user.name}
        </h2>
        <p className='text-[#020B56] text-sm px-4 mt-2 h-[6rem] overflow-y-scroll hide-scrollbar relative'>
          {user.description}
          <button
            className='absolute top-0 right-0 p-1 text-[#1AE3D9]'
            onClick={() => {
              const newDescription = prompt(
                'Edit Description:',
                user.description
              );
              if (newDescription)
                handleEditField('description', newDescription);
            }}
          >
            <FaEdit />
          </button>
        </p>
      </div>

      {/* Contact Info */}
      <div className='bg-white shadow-lg rounded-lg overflow-hidden w-[18rem] h-auto border border-[#020B56] p-4 mt-4'>
        <h3 className='font-bold text-[#020B56] text-lg mb-2 border-b border-[#020B56]'>
          A propos de moi :
        </h3>
        <p className='text-black text-sm mb-2'>
          City:
          <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
            {user.city}
          </span>
        </p>
        <p className='text-black text-sm mb-2'>
          Country:
          <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
            {user.country}
          </span>
        </p>
        <p className='text-black text-sm mb-2'>
          Membre depuis :
          <span className='bg-white border border-[#020B56] text-[#020B56] text-xs px-3 py-1 rounded-full ml-2'>
            {user.memberSince}
          </span>
        </p>
        <ul className='text-sm text-[#000000] space-y-2'>
          <li>
            <Phone className='mr-2 text-[#000000] h-5 w-5 inline' />
            {user.phone}
            <button
              className='ml-2 text-[#1AE3D9]'
              onClick={() => {
                const newPhone = prompt('Edit Phone:', user.phone);
                if (newPhone) handleEditField('phone', newPhone);
              }}
            >
              <FaEdit />
            </button>
          </li>
          <li>
            <Mail className='mr-2 text-[#000000] h-5 w-5 inline' />
            {user.email}
            <button
              className='ml-2 text-[#1AE3D9]'
              onClick={() => {
                const newEmail = prompt('Edit Email:', user.email);
                if (newEmail) handleEditField('email', newEmail);
              }}
            >
              <FaEdit />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
