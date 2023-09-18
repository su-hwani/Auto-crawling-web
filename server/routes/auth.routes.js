// routes/user.js

const express = require('express');
const router = express.Router();
const auth = require("../controller/auth.kakao.js");
const User = require("../models/user.model.js");

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
require('dotenv').config();

// Kakao Passport 전략 설정
passport.use(new KakaoStrategy({
    clientID: 'process.env.KAKAO_ID,',
    callbackURL: 'http://localhost:8080/auth/kakao/callback'
}, (accessToken, refreshToken, profile, done) => {
    // 여기에서 사용자 정보를 처리하거나 데이터베이스에 저장할 수 있습니다.
    const user = new User({
        user_id: profile.id,
        user_pw: profile.displayName,
    });
    return done(null, profile);
}));

// 세션 관리 (serializeUser와 deserializeUser 설정 필요)

// Kakao 로그인 라우트
router.get('/auth/kakao', passport.authenticate('kakao'));

// Kakao 로그인 콜백 라우트
router.get('/auth/kakao/callback',
    passport.authenticate('kakao', { failureRedirect: '/' }),
    (req, res) => {
        // 로그인 성공 시 리디렉션 또는 메인 페이지로 이동
        res.redirect('/');
    }
);


module.exports = router;