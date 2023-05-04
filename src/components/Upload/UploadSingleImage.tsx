import { DeleteRowOutlined, EyeOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SvgUploadImage from 'src/assets/svg/SvgUploadImage';
import { API_CDN } from 'src/cores/services/config';
import { uploadSingleImageToCDN } from 'src/cores/services/upload.service';
import { useIsMount } from 'src/hooks/useIsMount';
import { notifyError } from '../notification';
import ImageOverlay from './ImageOverlay';

const UploadSingleImage = () => {
	const [image, setImage] = useState<string>('');
	const [imageOverlay, setImageOverlay] = useState<string>('');
	const [overlay, setOverlay] = useState<boolean>(false);
	const [openImageOverlay, setOpenImageOverlay] = useState<boolean>(false);
	const [loadingUpload, setLoadingUpdate] = useState<boolean>(false);

	const pushImage = async (e: any) => {
		const file = e.target.files[0];
		setLoadingUpdate(true);
		uploadSingleImageToCDN(file)
			.then((data: any) => {
				console.log(data);
				setImage(data?.data[0]);
			})
			.catch((error) => notifyError(error))
			.finally(() => setLoadingUpdate(false));
	};

	const removeFunctIcon = (e: any) => {
		e.preventDefault();
		setImage('');
	};

	const onOpenImageOverlay = (image: string) => {
		setOpenImageOverlay(true);
		setImageOverlay(image);
	};

	function renderImage() {
		if (loadingUpload) return <Spin />;
		if (image)
			return (
				<div className="bannerImage-image" onMouseOver={() => setOverlay(true)} onMouseLeave={() => setOverlay(false)}>
					{overlay && (
						<div className="overplay">
							<div>
								<EyeOutlined onClick={() => onOpenImageOverlay(image)} />
							</div>
							<div onClick={removeFunctIcon}>
								<DeleteRowOutlined />
							</div>
						</div>
					)}
					<img src={`${API_CDN}/${image}`} alt="banner" />
				</div>
			);

		return (
			<>
				<label
					style={{
						marginTop: '4px',
						fontSize: '10px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						cursor: 'pointer'
					}}
					htmlFor="uploadImage"
				>
					<SvgUploadImage />
					<span style={{ marginTop: '4px' }}>20x20 (px)</span>
				</label>
				<input type="file" id="uploadImage" onChange={(e) => pushImage(e)} style={{ display: 'none' }} />
			</>
		);
	}

	return (
		<>
			<ImageOverlay open={openImageOverlay} imgSrc={imageOverlay} onClose={() => setOpenImageOverlay(false)} />
			<label
				className="bannerImage-bodyNew"
				style={{
					width: '80px',
					height: '80px',
					cursor: 'pointer',
					marginBottom: '8px'
				}}
				htmlFor="uploadImage"
			>
				{renderImage()}
			</label>
		</>
	);
};

export default UploadSingleImage;
