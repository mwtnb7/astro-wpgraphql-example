import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  formId: string; // databaseId
};

export default function ContactForm7({ formId }: Props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = useCallback(
    async (data: any) => {
      // console.log(data); // Debug

      const bodyFormData = new FormData();

      for (const key in data) {
        bodyFormData.append(key, data[key]);
      }

      bodyFormData.append('_wpcf7', formId);
      bodyFormData.append('_wpcf7_locale', 'ja');
      bodyFormData.append('_wpcf7_unit_tag', `wpcf7-f${formId}-p${formId}-o0`);
      // bodyFormData.append('_wpcf7_version', '5.4'); // 不要

      try {
        const response = await fetch(
          `${import.meta.env.PUBLIC_WP_URI}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
          {
            method: 'POST',
            body: bodyFormData // headersは削除しました
          }
        );

        const responseData = await response.json();

        if (responseData.status === 'mail_sent') {
          // alert('Message sent successfully!'); // Degug
          setShowSuccessMessage(true); // 状態を更新して成功メッセージを表示
        } else {
          alert('送信に失敗しました。');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('エラーが発生しました。');
      }
    },
    [formId]
  );

  return showSuccessMessage ? (
    <div className="bg-green-600 p-4 text-white font-bold">Thank you for your message!</div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-block">
        <label htmlFor="your-name">氏名</label>
        <div className="form-content">
          <input id="your-name" {...register('your-name', { required: '氏名は必須です' })} />
          {errors['your-name'] && <p className="error-message">{(errors['your-name'].message as string) || ''}</p>}
        </div>
      </div>
      <div className="form-block">
        <label htmlFor="your-email">メールアドレス</label>
        <div className="form-content">
          <input
            id="your-email"
            className="Input"
            {...register('your-email', { required: 'メールアドレスは必須です' })}
          />
          {errors['your-email'] && <p className="error-message">{(errors['your-email'].message as string) || ''}</p>}
        </div>
      </div>
      <div className="form-block">
        <label htmlFor="your-message">メッセージ本文</label>
        <div className="form-content">
          <textarea cols={30} rows={10} id="your-message" {...register('your-message')}></textarea>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="form-submit bg-white inline-flex items-center justify-center rounded text-lg py-3 px-10 border border-gray-500 transition hover:bg-black hover:text-white">
          送信する
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}
