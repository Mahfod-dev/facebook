import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'first name is required'],
      trim: true,
      text: true,
      minlength: [3, 'Must be at least 6, got {VALUE}'],
      maxlength: 30,
    },
    last_name: {
      type: String,
      required: [true, 'last name is required'],
      trim: true,
      text: true,
      minlength: [3, 'Must be at least 6, got {VALUE}'],
      maxlength: 30,
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      trim: true,
      text: true,
      unique: true,
      minlength: [3, 'Must be at least 6, got {VALUE}'],
      maxlength: 30,
    },

    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [6, 'Must be at least 6, got {VALUE}'],
      maxlength: 30,
    },
    picture: {
      type: String,
      trim: true,
      default:
        'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, 'gender is required'],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ['Single', 'In a relationship', 'Married', 'Divorced'],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: 'Post',
        },
        savedAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function () {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

UserSchema.methods.createJWT = function (payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: process.env.JWT_LIFE,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const User = mongoose.model('User', UserSchema);

export default User;
