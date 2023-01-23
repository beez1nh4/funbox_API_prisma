--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: movieStatus; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."movieStatus" AS ENUM (
    'unseen',
    'seen'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    "genreId" integer NOT NULL,
    "platformId" integer NOT NULL
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: platforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platforms (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: platforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platforms_id_seq OWNED BY public.platforms.id;


--
-- Name: usernames; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usernames (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: usernames_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usernames_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usernames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usernames_id_seq OWNED BY public.usernames.id;


--
-- Name: usersMovies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."usersMovies" (
    id integer NOT NULL,
    "usernameId" integer NOT NULL,
    "movieId" integer NOT NULL,
    comment text DEFAULT 'nothing to say'::text,
    status public."movieStatus" DEFAULT 'unseen'::public."movieStatus" NOT NULL
);


--
-- Name: usersMovies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."usersMovies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usersMovies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."usersMovies_id_seq" OWNED BY public."usersMovies".id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: platforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms ALTER COLUMN id SET DEFAULT nextval('public.platforms_id_seq'::regclass);


--
-- Name: usernames id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usernames ALTER COLUMN id SET DEFAULT nextval('public.usernames_id_seq'::regclass);


--
-- Name: usersMovies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersMovies" ALTER COLUMN id SET DEFAULT nextval('public."usersMovies_id_seq"'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (1, 'drama');
INSERT INTO public.genres VALUES (2, 'horror');
INSERT INTO public.genres VALUES (3, 'romance');
INSERT INTO public.genres VALUES (4, 'action');
INSERT INTO public.genres VALUES (5, 'mistery');
INSERT INTO public.genres VALUES (6, 'comedy');
INSERT INTO public.genres VALUES (7, 'documentary');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (1, 'Too All The Boys I Loved', 3, 1);
INSERT INTO public.movies VALUES (4, 'Superbad', 6, 1);
INSERT INTO public.movies VALUES (5, 'MeanGirls', 6, 1);
INSERT INTO public.movies VALUES (6, 'It', 2, 1);
INSERT INTO public.movies VALUES (7, '16 wishes', 6, 3);


--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platforms VALUES (1, 'netflix');
INSERT INTO public.platforms VALUES (2, 'youtube');
INSERT INTO public.platforms VALUES (3, 'amazon prime');
INSERT INTO public.platforms VALUES (4, 'couple');


--
-- Data for Name: usernames; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.usernames VALUES (1, 'mel', '2023-01-22');
INSERT INTO public.usernames VALUES (2, 'pedro', '2023-01-22');
INSERT INTO public.usernames VALUES (6, 'couple', '2023-01-23');


--
-- Data for Name: usersMovies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."usersMovies" VALUES (1, 2, 1, 'nothing to say', 'unseen');
INSERT INTO public."usersMovies" VALUES (4, 1, 6, 'nothing to say', 'unseen');
INSERT INTO public."usersMovies" VALUES (2, 1, 1, 'soooo romantic!', 'seen');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 7, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 7, true);


--
-- Name: platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platforms_id_seq', 4, true);


--
-- Name: usernames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.usernames_id_seq', 6, true);


--
-- Name: usersMovies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."usersMovies_id_seq"', 4, true);


--
-- Name: genres genres_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_name_key UNIQUE (name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_name_key UNIQUE (name);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: platforms platforms_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms
    ADD CONSTRAINT platforms_name_key UNIQUE (name);


--
-- Name: platforms platforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms
    ADD CONSTRAINT platforms_pkey PRIMARY KEY (id);


--
-- Name: usernames usernames_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usernames
    ADD CONSTRAINT usernames_name_key UNIQUE (name);


--
-- Name: usernames usernames_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usernames
    ADD CONSTRAINT usernames_pkey PRIMARY KEY (id);


--
-- Name: usersMovies usersMovies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersMovies"
    ADD CONSTRAINT "usersMovies_pkey" PRIMARY KEY (id);


--
-- Name: movies movies_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genres(id);


--
-- Name: movies movies_platformId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES public.platforms(id);


--
-- Name: usersMovies usersMovies_movieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersMovies"
    ADD CONSTRAINT "usersMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES public.movies(id);


--
-- Name: usersMovies usersMovies_usernameId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."usersMovies"
    ADD CONSTRAINT "usersMovies_usernameId_fkey" FOREIGN KEY ("usernameId") REFERENCES public.usernames(id);


--
-- PostgreSQL database dump complete
--

